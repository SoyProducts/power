import React, { Component } from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-oauth'
import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie'

class App extends Component {

  constructor() {
    super()
    this.responseGoogle = this.responseGoogle.bind(this)
    this.noResponseGoogle = this.noResponseGoogle.bind(this)
    this.cookie = new Cookies()
    this.state = {name: this.cookie.get('name') !== "" ? this.cookie.get('name') : "Guest"}
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

    return fetch(`http://localhost:3001/auth/request`, requestOptions)
      .then(response => {
        this.cookie.set('accesstoken', response.headers.get('access-token'));
        this.cookie.set('client',response.headers.get('client'));
        this.cookie.set('tokentype',response.headers.get('token-type'));
        this.cookie.set('expiry',response.headers.get('expiry'));
        this.cookie.set('uid', response.headers.get('uid'));
        this.cookie.set('name', response.headers.get('name'))
        this.setState({name: response.headers.get('name')})
      })
  }

  noResponseGoogle() {
    // var token = google_response.Zi;
    // const requestOptions = {
    //   method: 'DELETE',
    //   headers: {
    //     'Authorization': `Bearer ${google_response.Zi.accessToken}`,
    //     'Content-Type': 'application/json',
    //     'access_token': `${google_response.Zi.accessToken}`
    //   },
    //   body: JSON.stringify(token)
    // }
    //
    // return fetch(`http://localhost:3001/auth/sign_out`, requestOptions)
    //   .then(response => {
        this.cookie.set('accesstoken', "SAKAMOTO");
        this.cookie.set('client', "IS");
        this.cookie.set('tokentype', "THE");
        this.cookie.set('expiry', "CUTEST");
        this.cookie.set('uid', "CAT");
        this.cookie.set('name', "")
        this.setState({name: 'Guest'})
      // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {`Hello, ${this.state.name}`}
        </p>
        <GoogleLogin onLoginSuccess={this.responseGoogle} />
        <button onClick={this.noResponseGoogle}>SignOut</button>
      </div>
    );
  }
}

export default App;
