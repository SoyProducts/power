class NotificationsController < ApplicationController

  def index
    # @notifications = Notification.order(created_at: :desc).limit(30).offset(@page * 30)
    @notifications = Notification.all.sort.reverse
    render json: { notifications: @notifications }
  end

  def show
    @notification = Notification.find(params[:id])
    render json: { notification: @notification }
    # @station_info = @notification.station
  end

  def create
    @notification = Notification.new(notification_params)
  end

  private

  def notification_params
    params.require(:notification).permit(:channel_name)
  end

  # def set_page
  #   @page = params[:page] || 0
  # end

end
