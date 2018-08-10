class CreateStationInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :station_infos do |t|

      t.timestamps
    end
  end
end
