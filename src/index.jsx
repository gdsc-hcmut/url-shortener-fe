import React from 'react';
import ReactDOM from 'react-dom';
import './config/firebase-config';

import App from './App';

console.log('ENVIRONMENT', process.env.REACT_APP_ENVIRONMENT);

ReactDOM.render(<App />, document.getElementById('root'));
