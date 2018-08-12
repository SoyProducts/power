class NotificationsController < ApplicationController

  def index
    @notifications = Notification.all.sort.reverse
    render json: { notifications: @notifications }
  end

  def show
    @notification = Notification.find(params[:id])
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
