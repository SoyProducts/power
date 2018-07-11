import React, { Component } from 'react';
import Header from 'Header/Header.js';
import Quote from './Quote.js';
import NotificationIndexContainer from './Notifications/NotificationIndexContainer.js';

class Splashed extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splashed">
        <Header name={this.props.name}/>
        <Quote />
        <NotificationIndexContainer />
      </div>
    )
  }

}

export default Splashed;
