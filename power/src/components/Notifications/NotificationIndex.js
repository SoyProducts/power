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
      this.room = this.props['data-cableApp'].cable.subscriptions.create({channel: 'NotificationChannel'}, {
        received: (data) => {
          let notificationArray = this.state.notificationLogs
          notificationArray.push(data)
          this.setState({notificationLogs: notificationArray})
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
