import React, { Component } from 'react';
// import NotificationModal from './NotificationModal.js';

class NotificationIndexItem extends Component {

  constructor(props) {
    super()
    this.state = {
      modalshow: "hidden"
    }
    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle(e) {
    e.preventDefault();
    if (e.target.className === "notification-index-item") {
      this.setState({modalshow: this.state.modalshow === "hidden"
      ? "" : "hidden"})
    }
  }


    //check if it's in the cache
    //fetch request to get station info
    //cache it

//when modal loads make a call to grab station info
//caching -> global variable or state to memorize


  render() {
    return (
    <section className="notification-index-item" id={this.props.index}
      data-stationid={this.props.notification.station_info_id}
      onClick={this.props.stationDetails} >
        <p>{this.props.notification.id}</p>
        <p>{this.props.notification.created_at}</p>
        <p>{this.props.notification.song_title}</p>
        <p>{this.props.notification.channel_name}</p>
        <hr />
    </section>

    )
    // <div onClick={this.modalToggle}
    //   className={`the-modal ${this.state.modalshow}`}>
    //   {this.stationDetails}
    // </div>
  }

}

export default NotificationIndexItem;
