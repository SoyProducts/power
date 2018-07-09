class AddNotificationFilterToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :notification_filter, :string
  end
end
