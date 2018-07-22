class AddColumnToStationInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :station_infos, :name, :string
    add_column :station_infos, :stream_link, :string
    add_column :station_infos, :station_twitter, :string
    add_column :station_infos, :DJtwitter, :string
    add_column :station_infos, :phone_number, :string
    add_column :station_infos, :request_form_link, :string
  end
end
