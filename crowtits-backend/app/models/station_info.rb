class StationInfo < ApplicationRecord

  has_many :notifications
    foreign_key :station_id
    class_name :StationInfo

end
