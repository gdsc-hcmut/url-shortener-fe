import { combineReducers } from 'redux';

import auth from './auth';
import showModal from './showModal';
import url from './url';

export default combineReducers({ url, auth, showModal });
