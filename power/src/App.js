import React, { Component } from 'react';
// import {GoogleLogin, GoogleLogout} from 'react-google-oauth'
// import logo from './logo.svg';
// import './App.css';
import Cookies from 'universal-cookie';
import Splash from './components/Splash.js';
import {Route, HashRouter, Redirect} from 'react-router-dom';
import Splashed from './components/Splashed.js';
//global variable current user

class App extends Component {

  constructor() {
    super()
    this.responseGoogle = this.responseGoogle.bind(this)
    this.noResponseGoogle = this.noResponseGoogle.bind(this)
    this.cookie = new Cookies()
    this.room = ""
    this.state = {name: this.cookie.get('name') !== "" ? this.cookie.get('name') : "Guest",
    accesstoken: "", areYouLegit: this.cookie.get('name') !== "" ? true : false,
    room: ""}
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
        this.setState({name: response.headers.get('name'),
          accesstoken: response.headers.get('access-token'),
          areYouLegit: true})
      })
  }

  noResponseGoogle(google_response) {
    // var token = google_response.Zi;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        // 'Authorization': `Bearer ${google_response.Zi.accessToken}`,
        'Content-Type': 'application/json',
        'access_token': this.cookie.get('accesstoken')
      },
      // body: JSON.stringify(token)
    }

    return fetch(`http://localhost:3001/auth/sign_out`, requestOptions)
      .then(response => {
        this.cookie.set('accesstoken', "");
        this.cookie.set('client', "");
        this.cookie.set('tokentype', "");
        this.cookie.set('expiry', "");
        this.cookie.set('uid', "");
        this.cookie.set('name', "");
        this.setState({name: 'Guest', accesstoken: "", areYouLegit: false});
      })
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route
            render={(props) =>
              this.state.areYouLegit === true ? (
                <Redirect
                  to={{pathname: "/sakamoto"}}/>
              ) : (
                <Splash
                areYouLegit={this.state.areYouLegit}
                accesstoken={this.state.accesstoken}
                responseGoogle={this.responseGoogle}
                noResponseGoogle={this.noResponseGoogle}
                name={this.state.name} />
              )
            }
            exact path="/" />
          <Route
            render={(props) =>
              this.state.areYouLegit === true ? (
                <Splashed
                  areYouLegit={this.state.areYouLegit}
                  accesstoken={this.state.accesstoken}
                  name={this.state.name}
                  noResponseGoogle={this.noResponseGoogle}
                  cableApp={this.props.cableApp}
                  createSubs={this.createSubs}
                  />) : (
                <Redirect to={{pathname: "/"}} />
              )
            }
            exact path="/sakamoto" />
        </div>
    </HashRouter>
    );
  }
}

export default App;
