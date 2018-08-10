class ChangeStationIdToStationInfoId < ActiveRecord::Migration[5.1]
  def change
    rename_column :notifications, :station_id, :station_info_id
  end
end
