import { SHOW_URL_MODAL, SHOW_LOG_IN_MODAL } from 'action-types';

const defaultSetUp = {
  UrlModal: false,
  LogInModal: false,
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
    default:
      return state;
  }
};
