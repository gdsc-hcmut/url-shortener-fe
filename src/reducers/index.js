import { combineReducers } from 'redux';

import auth from './auth';
import notification from './notification';
import showModal from './showModal';
import url from './url';
import urlWithSlug from './urlWithSlug';

export default combineReducers({
  url,
  auth,
  showModal,
  urlWithSlug,
  notification,
});
