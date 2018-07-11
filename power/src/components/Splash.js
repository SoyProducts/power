// import {withRouter} from 'react-router-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-oauth'
import React, { Component } from 'react';
import './Splash.css'

class Splash extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash">
        <h2 className="splash-title">{`Hello, ${this.props.name}`}</h2>
        <GoogleLogin onLoginSuccess={this.props.responseGoogle} />
        <button onClick={this.props.noResponseGoogle}>SignOut</button>
      </div>
    )
  }

}

export default Splash
