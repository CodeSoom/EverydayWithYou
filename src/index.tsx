import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';

import App from './App';

import store from './store';

ReactDOM.render(((
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)), document.getElementById('app'));
