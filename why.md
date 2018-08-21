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

+ decoupling misconceptions
- for displaying the index, the backend and the frontend are adding each other simultaneously. I had a couple issues on when to call the subscriptions + loading notifications on client-side because I wasn't sure if I should have to load it with an update like in componentWillUpdate. However, since the app is decoupled (separation of tasks), it will only do so in the initial render. Since this is React, the page will automatically re-render once there is a change in the state.
- social dummy, pics art, phonto, & VSCO

+ ideas on index and delete
- we're loading all the indexes. Mute should only affect the push notifications (what's the point of it on the desktop?) Delete is currently a joins table idea but we're thinking of slicing the index based on a series of if statements. Right now, I need to work on push notifications and pagenation (load 30 at a time)

+ threading state vs props
- passed down updated state from Splashed through Index. The component updates twice -- one is the initial render and the second is the update. However, the constructor begins once and that becomes the state for the entire component. The props get updated in the second render in the update. In ComponentDidUpdate you can setState(?) but only as a callback. It's just bad practice in general so like this is just an explanation on why things are the way they are. If you change it to this.props.notificationLogs it'll work but the state is empty in the initial render and won't update unless you setState.

+ fetch then scope I don't know
- so like when you when you do like a fetch request you do two thens on the second then it actually runs in a separate scope. So in the example of grabbing stationDetails in the modal...we have global variable that is a cache named this.stationcache (turns out you can't use a declaration keyword(let, const, var) inside the constructor) so we did an if else statement with the else statement doing the fetch request. The if statement is obviously in teh same scope. So the fetch statements are not in the same scope because it's in a different function ex/ .then(data => {console.log(this is in a different scope)}). One solution is to declare that = this in the beginning and then when you need to access like the global variable cache then you just call that.stationcache inside the then function.

+ pagination
- shit okay. So my initial idea was the do that fetch call to all of the notificiations, and then we slice it like notifications.all.slice(0..y) and everytime we do that like scrollposition vs element y-position (likehalfwayorsomeshit) we load another thirty by adding it to the y in the range. However, that shit actually loads up the entire index which will kill mobile. What we need to do is to only send in 30 from the backend. We do the math of adding 30 on the backend and load notifications.all.slice(0..y+30) on hte backend. We make the call on the frontend when we compare the scrollposition vs the element y-position. I need to look up how to send a slice on the backend first. Then look up how to compare scrollposition vs y-position and then make the call. Okay backend....we are doing uhhh pages. We keep the page number in the state or some shit on the frontend and we do some offset thing like Notification.all.slice(pg * 30.. pg * 30 + 30) based on what number we are at like lol.
Notification.order(created_at: :desc).limit(30).offset(atpage * 30) so we increase the page number based on what position we are at on the frontend. copy and pasting from code look at code to see the copied version.

+ my last braincell
- push notifications. Once someone pushes no, they need to be able to allow it again. also most of this requires a server (currently using chrome's webserver for tutorials). AWS is supposed to replace localhost. What replaces webserver? Is it still AWS? Need to read what registerserviceworker.js is doing. Most of it is calling localhost, which will undoubtedly change once we have to release
