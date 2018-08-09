class StationInfo < ApplicationRecord

  validates :name, uniqueness: true

  has_many :notifications

end
