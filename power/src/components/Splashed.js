import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header/Header.js';
import Quote from './Quote.js';
import NotificationIndex from './Notifications/NotificationIndex.js'
// import {GoogleLogout} from 'react-google-oauth'


// import NotificationIndex from './Notifications/NotificationIndex.js';

class Splashed extends Component {

  // constructor(props) {
  //   super(props)
  // }

  // <p>{this.props.name} is here bitches get in the car</p>
  render() {
    return (
      <div className="splashed">
        <Header name={this.props.name} />
        <Quote />
        <NotificationIndex
          areYouLegit={this.props.areYouLegit}
          cableApp={this.props.cableApp} />
        <button onClick={this.props.noResponseGoogle}>SignOut</button>
      </div>
    )
  }

}
// <NotificationIndex />

export default withRouter(Splashed);
