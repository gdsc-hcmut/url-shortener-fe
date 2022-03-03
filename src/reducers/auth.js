import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_NOT_FOUND,
  NEW_EMAIL_TAKEN,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_LOADING,
} from 'action-types';

const initialState = {
  token: localStorage.getItem('user'),
  isAuthenticated: null,
  loading: true,
  user: {
    name: 'user name',
    email: 'user email',
    dateOfBirth: 'user birthday',
    avatar: 'user avatar',
  },
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        error: {},
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        error: {},
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case USER_NOT_FOUND:
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        loading: false,
      };
    case NEW_EMAIL_TAKEN:
      return {
        ...state,
        error: { email: 'Email taken' },
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
