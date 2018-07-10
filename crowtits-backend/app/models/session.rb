class Session < ApplicationRecord
  validates :accesstoken, :uid, presence: true
end
