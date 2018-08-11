import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleAPI} from 'react-google-oauth'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import actionCable from 'actioncable'

const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://localhost:3001/cable`)

ReactDOM.render(<Router>
    <GoogleAPI clientId="639592487963-akhi4ormq2ipqc6r5r5m8sfrpjsa50g9.apps.googleusercontent.com">
      <App cableApp={CableApp} />
    </GoogleAPI>
  </Router>, document.getElementById('root'));
registerServiceWorker();
