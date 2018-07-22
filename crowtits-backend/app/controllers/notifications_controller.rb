class NotificationsController < ApplicationController

  def index
    @notifications = Notifications.all
  end

  def show
    @notification = Notification.find(params[:channel_name])
    # @station_info = @notification.station
  end

  def create
    @notification = Notification.new(notification_params)
  end

  private

  def notification_params
    params.require(:notification).permit(:channel_name)
  end

end