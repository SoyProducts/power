require 'sidekiq'
require 'sidekiq/web'

#this is an initializer
Sidekiq.configure_client do |config|
  config.redis = { db: 1 }
end

Sidekiq.configure_server do |config|
  config.redis = { db: 1 }
end

class HardWorker
  include Sidekiq::Worker

  def perform(name)
    # executes jobs
    case name
    when "Sakamoto"
      sleep 2
      puts "#{name} is the cutest cat"
    else
      sleep 1
      puts "That's not Sakamoto, therefore, they are not the cutest cat"
    end
  end

end
