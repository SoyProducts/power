import React, { Component } from 'react';
// import NotificationModal from './NotificationModal.js';

class NotificationIndexItem extends Component {

  // constructor(props) {
  //   super()
  //   this.state = {
  //     modalshow: "hidden"
  //   }
  // }




  render() {
    return (
      <div className="notification-index-item" id={this.props.index}
        data-stationid={this.props.notification.station_info_id}
        onClick={this.props.handleClick} >
          <p>{this.props.notification.id}</p>
          <p>{this.props.notification.created_at}</p>
          <p>{this.props.notification.song_title}</p>
          <p>{this.props.notification.channel_name}</p>
          <hr />
      </div>

    )
    // <div onClick={this.modalToggle}
    //   className={`the-modal ${this.state.modalshow}`}>
    //   {this.stationDetails}
    // </div>
  }

}

export default NotificationIndexItem;
