import {withRouter} from 'react-router-dom';
import {GoogleLogin} from 'react-google-oauth'
import React, { Component } from 'react';
import './Splash.css'

class Splash extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="splash">
        <h2 className="splash-title">{`Hello, ${this.props.name}`}</h2>
        <GoogleLogin onLoginSuccess={this.props.responseGoogle} />
      </div>
    )
  }

}

export default withRouter(Splash)
