import React, {Component} from 'react';
import NotificationIndexItem from './NotificationIndexItem.js';

class NotificationIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notificationLogs: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/notifications`)
    .then(response => {
      return response.json();
      console.log(response)
    })
    .then(data => {
      console.log(data)
      this.setState({notificationLogs: data.notifications})
    })
    this.createSubs();
  }

  createSubs = () => {
    if (this.props.areYouLegit === true) {
      this.room = this.props['cableApp'].cable.subscriptions.create({channel: 'NotificationChannel'}, {
        received: (data) => {
          console.log(data)
          let notificationArray = this.state.notificationLogs
          notificationArray.unshift(data.notification)
          this.setState({notificationLogs: notificationArray})
        },
        connected: () => {
          console.log('connected')
          console.log(this.room)
          // this.room.speak('message')
          // console.log(this.state)
        }
      })
    }
  }

  render() {
    let notifications = this.state.notificationLogs.map(notification => {
      return (
        <NotificationIndexItem notification={notification} key={notification.id}/>
      )
    })
    return(
      <div>{notifications}</div>
    )
  }

}

export default NotificationIndex;
