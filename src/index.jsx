import {
  BrowserRouter as Router,
} from 'react-router-dom';

import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render((
  <Router>
    <App />
  </Router>
),
document.getElementById('app'));
