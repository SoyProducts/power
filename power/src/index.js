import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleAPI} from 'react-google-oauth'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GoogleAPI clientId="639592487963-akhi4ormq2ipqc6r5r5m8sfrpjsa50g9.apps.googleusercontent.com">
        <App /></GoogleAPI>, document.getElementById('root'));
registerServiceWorker();
