class AddIndexToNotifications < ActiveRecord::Migration[5.1]
  def change
    add_index :notifications, :now_playing 
  end
end
