import React, {Component} from 'react';
import NotificationIndexItem from './NotificationIndexItem.js';
import NotificationModal from './NotificationModal.js';
import './NotificationModal.css';

class NotificationIndex extends Component {

  constructor(props) {
    super(props)
    this.paginateScroll = this.paginateScroll.bind(this);
    this.stationDetails = this.stationDetails.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      notificationLogs: [],
      page: 0,
      modalShow: "hidden",
      currentStationId: 0
    }
    this.stationcache = {};
  }

  componentDidMount() {
    fetch(`http://localhost:3001/notifications`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      //this fetches the index from the backend. This gives me the whole index
      console.log(data)
      this.setState({notificationLogs: data.notifications})
    })
    this.createSubs();
  }

  componentDidUpdate() {
    if (this.state.notificationLogs.length !== 0) {
      console.log('nope')
      window.addEventListener('scroll', this.paginateScroll);
    }
  }

  paginateScroll() {
    let halfid = 15 * this.state.page + 15
    if (halfid > this.state.notificationLogs.length) {
      halfid = this.state.notificationLogs.length - 1
    }
    let element = document.getElementById(halfid)
    let elYPosition = element.getBoundingClientRect();
    if (elYPosition.y < 0) {
      let url = new URL(`http://localhost:3001/notifications`),
      params = { page: this.state.page }
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(url).then(response => {
        return response.json();
      })
      .then(data => {
        let pagenumber = this.state.page
        let notificationArray = this.state.notificationLogs
        let newOnes = notificationArray.concat(data.notifications)
        this.setState({notificationLogs: newOnes,
        page: pagenumber + 1 })
      })
    }
  }

  createSubs = () => {
    if (this.props.areYouLegit === true) {
      this.room = this.props['cableApp'].cable.subscriptions.create({channel: 'NotificationChannel'}, {
        received: (data) => {
          console.log(data)
          //this is adding notifications to the array. The data is a single notification
          let notificationArray = this.state.notificationLogs
          notificationArray.unshift(data.notification)
          this.setState({notificationLogs: notificationArray})
        },
        connected: () => {
          console.log('connected')
          console.log(this.room)
        }
      })
    }
  }

  stationDetails(target) {
    let stationid = target.dataset.stationid
    let that = this
    if (this.stationcache[stationid]) {
      this.setState({currentStationId: stationid})
    } else {
      let url = new URL(`http://localhost:3001/station_infos/${stationid}`)
      fetch(url).then(response => {
        return response.json();
      }).then(data => {
        that.stationcache[stationid] = data.station
        console.log(this.stationcache)
        this.setState({currentStationId: stationid})
      })
    }
  }

  modalToggle(target) {
    this.setState({modalShow: this.state.modalShow === "hidden"
    ? "station-modal" : "hidden"})
    console.log(this.state.modalShow)
  }

  handleClick(e) {
    e.preventDefault();
    let target;
    if (e.target.tagName === 'P') {
      target = e.target.parentNode
    } else {
      target = e.target
    }

    this.stationDetails(target);
    this.modalToggle(target);
  }

  render() {
    let notifications = this.state.notificationLogs.map((notification, index) => {
      return (
        <NotificationIndexItem notification={notification} key={index}
          index={index} handleClick={this.handleClick} />
      )
    })
    return(
      <div>
        <div>{notifications}</div>
        <NotificationModal stationcache={this.stationcache}
          currentStationId={this.state.currentStationId}
          modalShow={this.state.modalShow}
          modalToggle={this.modalToggle} />
      </div>
    )
  }

}

export default NotificationIndex;
