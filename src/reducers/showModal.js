import {
  SHOW_DELETE_URL_MODAL,
  SHOW_URL_MODAL,
  SHOW_LOG_IN_MODAL,
  SHOW_SIGN_UP_MODAL,
  SHOW_FORGOT_PASSWORD_MODAL,
  SHOW_COPY_SUCCESS_MODAL,
  SHOW_EDIT_URL_MODAL,
  SHOW_GOOGLE_LOADING_ANIMATION,
} from 'action-types';

const defaultSetUp = {
  UrlModal: false,
  LogInModal: false,
  SignupModal: false,
  ForgotPasswordModal: false,
  GoogleLoading: false,
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
    case SHOW_FORGOT_PASSWORD_MODAL:
      return {
        ...state,
        ForgotPasswordModal: payload,
      };
    case SHOW_DELETE_URL_MODAL:
      return {
        ...state,
        DeleteUrlModal: payload,
      };
    case SHOW_COPY_SUCCESS_MODAL:
      return {
        ...state,
        CopySuccessModal: payload,
      };
    case SHOW_EDIT_URL_MODAL:
      return {
        ...state,
        EditUrlModal: payload,
      };
    case SHOW_GOOGLE_LOADING_ANIMATION:
      return {
        ...state,
        GoogleLoading: payload,
      };
    default:
      return state;
  }
};
