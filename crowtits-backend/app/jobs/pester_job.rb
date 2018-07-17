require 'json'
require 'resque'

class Pester
  include HTTParty

  @queue = :arraymaybe
  #compare now_playing with current notifications based on songstamp

  def self.perform(seconds)
    current_notification_from_database = {}
    seen_in_new_response = {}
    p "starting pester:"
    # all_notifications = Notification.find_by({now_playing: true})
    all_notifications = {}
    # assuming database object thing is ordered by station_name: { data }
    all_notifications.each do |k, v|
      current_notification_from_database[k] = v
      seen_in_new_response[k] = false
    end

    url = "http://api.dar.fm/playlist.php?q=drake&partner_token=#{Rails.application.secrets['onradio_api_key']}"
    xmlresponse = HTTParty.get(url)
    jsonresponse = Hash.from_xml(xmlresponse.body).to_json
    stations = jsonresponse.playlist.station

    stations.each do |el|
      if current_notification_from_database[k]
        next
      else
        p el.callsign
        # station_info = Station.find_by(el.callsign)
        #return {1: {}}
        # notification = Notification.new({
        #   song_title: el.title
        #   channel_name: el.callsign
        #   # station_id: station_info.id
        #   now_playing: true
          # })
        #save @notification.save will happen in the create function of notifications controller
      end
      seen_in_new_response[el.callsign] = true
    end


    # seen_in_new_response.each do |k, v|
    #   if seen_in_new_response[k] == false
    #     updated_notification = Notification.find_by({k})
    #     updated_notification.now_playing = false
    #   end
    # end

  end

end
