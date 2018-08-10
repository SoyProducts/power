class NotificationChannel < ApplicationCable::Channel
  def subscribed
    #what the fuck is room. Hardcode this once I find out how to do this
    # stream_from 'notification_room'
    stream_from 'note'
  end

  def receive(data)
    NotificationChannel.broadcast('notification_channel',
    {notification: data, text:"oh snap"})
  end

  def speak(data)
    NotificationChannel.broadcast('notification_channel',
    {notification: data, text:"oh snap"})
  end
end
