import React, { Component } from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-oauth'
import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie'

class App extends Component {

  constructor() {
    super()
    this.responseGoogle = this.responseGoogle.bind(this)
  }

  responseGoogle(google_response) {
    var token = google_response.Zi;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${google_response.Zi.accessToken}`,
        'Content-Type': 'application/json',
        'access_token': `${google_response.Zi.accessToken}`
      },
      body: JSON.stringify(token)
    }

    return fetch(`http://localhost:3001/auth/sign_in`, requestOptions)
      .then(response => {
        let cookie = new Cookies()
        cookie.set('accesstoken', response.headers.get('access-token'));
        cookie.set('client',response.headers.get('client'));
        cookie.set('tokentype',response.headers.get('token-type'));
        cookie.set('expiry',response.headers.get('expiry'));
        cookie.set('uid', response.headers.get('uid'));
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin onLoginSuccess={this.responseGoogle} onFailure={this.responseGoogle}/>
        <GoogleLogout onLoginSuccess={this.responseGoogle} onFailure={this.responseGoogle}/>
      </div>
    );
  }
}

export default App;
