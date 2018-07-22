class AddForeignKeyToNotifications < ActiveRecord::Migration[5.1]
  def change
    add_column :notifications, :station_id, :integer
  end
end
