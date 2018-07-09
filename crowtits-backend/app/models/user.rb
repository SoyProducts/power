class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.create_user_for_google(data)
  where(uid: data["email"]).first_or_initialize.tap do |user|
    user.provider="google_oauth2"
    user.uid=data["email"]
    user.email=data["email"]
    user.password=Devise.friendly_token[0,20]
    user.password_confirmation=user.password
    user.save!
  end
 end
end
