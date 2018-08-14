class Notification < ApplicationRecord

  validates :song_title, :channel_name, presence: true
  validates :channel_name, uniqueness: {scope: :created_at}

  belongs_to :station_info

  after_create_commit {MessengerWorker.new.perform self}
end
