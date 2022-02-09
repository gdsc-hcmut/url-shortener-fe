import {
  SHOW_URL_MODAL,
  SHOW_LOG_IN_MODAL,
  SHOW_SIGN_UP_MODAL,
} from 'action-types';

const defaultSetUp = {
  UrlModal: false,
  LogInModal: false,
  SignupModal: false,
};
// eslint-disable-next-line default-param-last
export default (state = defaultSetUp, { type, payload }) => {
  switch (type) {
    case SHOW_URL_MODAL:
      return {
        ...state,
        UrlModal: payload,
      };
    case SHOW_LOG_IN_MODAL:
      return {
        ...state,
        LogInModal: payload,
      };
    case SHOW_SIGN_UP_MODAL:
      return {
        ...state,
        SignupModal: payload,
      };
    default:
      return state;
  }
};
