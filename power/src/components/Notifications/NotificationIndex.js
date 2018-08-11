import React, {Component} from 'react';

class NotificationIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notificationLogs: []
    }
  }

  componentWillMount() {
    this.createSubs();
  }

  createSubs = () => {
    if (this.props.areYouLegit === true) {
      this.room = this.props['cableApp'].cable.subscriptions.create({channel: 'NotificationChannel'}, {
        received: (data) => {
          console.log(data)
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

  updateNotifications(notification) {
    let notificationArray = this.state.notificationLogs
    notificationArray.push(notification)
    this.setState({notificationLogs: notificationArray})
  }




  // let notificationLogs = this.state.notificationLogs.map((el) => {
  //   <notificationItem />
  // })
  render() {
    return(
      <div></div>
    )
  }

}

export default NotificationIndex;
