class ChangeNowPlayingName < ActiveRecord::Migration[5.1]
  def change
    rename_table :now_playings, :notifications
  end
end
