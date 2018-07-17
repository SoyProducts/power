import React, { Component } from 'react';
import Header from './Header/Header.js';
import Quote from './Quote.js';
import {withRouter} from 'react-router-dom';
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
        <Header name={this.props.name}/>
        <Quote />
          <button onClick={this.props.noResponseGoogle}>SignOut</button>
      </div>
    )
  }

}
// <NotificationIndex />

export default withRouter(Splashed);
