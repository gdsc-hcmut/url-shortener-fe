import React from 'react';
import ReactDOM from 'react-dom';
import './config/firebase-config';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

console.log('ENVIRONMENT', process.env.REACT_APP_ENVIRONMENT);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
