require 'sidekiq'
# require 'sidekiq/web'
require 'json'
require 'httparty'
require 'sidekiq-scheduler'


#this is an initializer
Sidekiq.configure_client do |config|
  config.redis = { url: 'redis://127.0.0.1:6379' }
end

Sidekiq.configure_server do |config|
  config.redis = { url: 'redis://127.0.0.1:6379' }
end

class HardWorker
  include Sidekiq::Worker


  def perform
    # executes jobs
    p "------------------------------------------------------------------------------------------"
    current_notification_from_database = {}
    seen_in_new_response = {}
    # all_notifications = Notification.find_by({now_playing: true})
    all_notifications = Notification.where(now_playing: true)
    # we has problem here (grab 30 infinite scrolling)

    # assuming database object thing is ordered by station_name: { data }
    if all_notifications.length == 0
    else
      all_notifications.each do |el|
        current_notification_from_database[el.channel_name] = el
        seen_in_new_response[el.channel_name] = false
      end
    end

    url = "http://api.dar.fm/playlist.php?q=bts&partner_token=2628583291"
    xmlresponse = HTTParty.get(url)
    jsonresponse = Hash.from_xml(xmlresponse.body)
    stations = jsonresponse['playlist']['station']

    if stations != nil
      if stations.class == Hash
        stations = [stations]
      end

      stations.each do |el|
        station_info = StationInfo.find_by(name: el['callsign'].strip)
        p "station_info: #{station_info}"
        if !station_info
          station_info = StationInfo.create({
            name: el['callsign'].strip
            })
        end

        if current_notification_from_database[el['callsign'].strip]
          next
        else
          notification = Notification.create({
          song_title: el['title'].strip,
          channel_name: el['callsign'].strip,
          now_playing: true,
          station_info_id: station_info.id
          })
          p "notification: #{notification}"
        end
        seen_in_new_response[el['callsign'].strip] = true
      end

      seen_in_new_response.each do |k, v|
        if v == false
          #check if seconds remaining is zero 
          changed_notification = Notification.find_by(channel_name: k)
          changed_notification.now_playing = false
          changed_notification.save
        else
          next
        end
      end
    end

  end

end
