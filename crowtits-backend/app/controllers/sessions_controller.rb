class SessionsController < ApplicationController

  def destroy
    session = Session.find_by({accesstoken: request.headers['access-token'].to_s})
    session.active = false
    session.save
  end

end

=begin
  create -> user + accesstoken

=end
