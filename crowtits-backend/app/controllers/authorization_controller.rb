require 'httparty'
require 'json'

class AuthorizationController < ApplicationController
  include HTTParty

 def get_authorization
   url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{params["id_token"]}"
   response = HTTParty.get(url)
   @user = User.create_user_for_google(response.parsed_response)
   tokens = @user.create_new_auth_token
   @user.save
   p tokens
   set_headers(tokens)
   render json: { status: 'Signed in successfully with google'}
 end

 #  render json:@user

private
def set_headers(tokens)
  headers['access-token'] = (tokens['access-token']).to_s
  headers['client'] =  (tokens['client']).to_s
  headers['expiry'] =  (tokens['expiry']).to_s
  headers['uid'] =@user.uid
  headers['token-type'] = (tokens['token-type']).to_s
 end

end
