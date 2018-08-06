require 'sidekiq'
# require 'sidekiq/web'
require 'json'
require 'httparty'
require 'sidekiq-scheduler'


#this is an initializer
Sidekiq.configure_client do |config|
  config.redis = { url: 'redis://127.0.0.1:6379' }
end

Sidekiq.configure_server do |config|
  config.redis = { url: 'redis://127.0.0.1:6379' }
end

class MessengerWorker
  include Sidekiq::Worker


  def perform()
    # executes jobs
    p "this is a different line -------------------------------------"
    ActionCable.server.broadcast "note", notification: "hello"
  end

end
