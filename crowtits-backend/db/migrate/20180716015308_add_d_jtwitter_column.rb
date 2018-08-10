class AddDJtwitterColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :notifications, :DJtwitter, :string
  end
end
