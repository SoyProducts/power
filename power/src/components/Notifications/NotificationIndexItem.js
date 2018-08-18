import React, { Component } from 'react';
// import NotificationModal from './NotificationModal.js';

class NotificationIndexItem extends Component {

  constructor(props) {
    super()
    this.state = {
      modalshow: "hidden"
    }
    this.modalToggle = this.modalToggle.bind(this);
    this.stationDetails = this.stationDetails.bind(this);
    this.stationcache = {};
  }

  modalToggle(e) {
    e.preventDefault();
    if (e.target.className === "notification-index-item") {
      this.setState({modalshow: this.state.modalshow === "hidden"
      ? "" : "hidden"})
    }
  }

  stationDetails(e) {
    //e.target gives whatever. Check if it's a p tag. Then go to parentnode
    //if it's not a p tag then you're the father
    let target;
    if (e.target.tagName === 'P') {
      // console.log(target.parentElement)
      target = e.target.parentNode
      console.log(target.dataset.stationid)
    } else {
      target = e.target
    }

    let stationid = target.dataset.stationid
    let that = this
    if (this.stationcache[stationid]) {
      console.log("Igrabbed it from the cache except this shouldn't print now")
    } else {
      let url = new URL(`http://localhost:3001/station_infos/${stationid}`)
      fetch(url).then(response => {
        return response.json();
      }).then(data => {
        that.stationcache[stationid] = data
        console.log("sAkAmOtO iS tHe CuTeST cAt")
        console.log("damn she cute")
        console.log(data)
        console.log(that.stationcache)
      })
    }


    //check if it's in the cache
    //fetch request to get station info
    //cache it
  }
//when modal loads make a call to grab station info
//caching -> global variable or state to memorize


  render() {
    return (
    <section className="notification-index-item" id={this.props.index}
      onClick={this.stationDetails} data-stationid={this.props.notification.station_info_id} >
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
