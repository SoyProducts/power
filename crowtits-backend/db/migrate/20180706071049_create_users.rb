class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :session_token
      t.string :location
      t.string :notification_filter

      t.timestamps
    end
  end
end
