class AddNowPlayingBooleanColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :notifications, :now_playing, :boolean
  end
end
