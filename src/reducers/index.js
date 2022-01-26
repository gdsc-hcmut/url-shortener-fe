import { combineReducers } from 'redux';

import showModal from './showModal';
import url from './url';

export default combineReducers({ url, showModal });
