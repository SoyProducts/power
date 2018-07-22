class RemoveHellaColumnsFromNotifications < ActiveRecord::Migration[5.1]
  def change
    remove_column :notifications, :stream_link
    remove_column :notifications, :station_twitter
    remove_column :notifications, :phone
    remove_column :notifications, :request_form_link
    remove_column :notifications, :DJtwitter 
  end
end
