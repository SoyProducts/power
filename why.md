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

### something
+ client-side could not receive broadcasts
- we created a messenger worker that creates the notifications. We're not too sure what is the reason why it works now as oppose to other things but ActionCable had to broadcast through a channel/or room? In order for it to perform, we passed in an argument, which then means we had to pass in an argument (self) in the notifications model with the after_create_commit
- OKAY
