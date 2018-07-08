class NowPlaying < ApplicationRecord

  validates :song_title, :channel_name, presence: true

end
