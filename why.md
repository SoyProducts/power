## Google Oath
+ reset session tokens every 20 minutes
+ hash uid, email

### shit needed to start everything
rails server
bundle exec sidekiq
HardWorker.perform_async()
npm start
redis-cli (/etc/redis)
sudo redis-server (/etc/redis)
