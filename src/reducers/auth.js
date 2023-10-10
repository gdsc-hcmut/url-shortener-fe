import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  IS_ADMIN,
  LOGIN_WITH_GOOGLE_SUCCESS,
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
  isAdmin: false,
  loading: true,
  user: {
    name: 'user name',
    email: 'user email',
    dateOfBirth: 'user birthday',
    avatar: null,
  },
  error: {},
  loggedInWithGoogle: null,
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
        loggedInWithGoogle: false,
      };
    case IS_ADMIN:
      return {
        ...state,
        ...payload,
        isAdmin: payload.isAdmin,
      };
    case LOGIN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
        ...payload,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        error: {},
        loggedInWithGoogle: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case AUTH_ERROR:
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        loggedInWithGoogle: false,
        user: {
          name: 'user name',
          email: 'user email',
          dateOfBirth: 'user birthday',
          avatar: null,
        },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
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
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        loggedInWithGoogle: false,
        user: {
          name: 'user name',
          email: 'user email',
          dateOfBirth: 'user birthday',
          avatar: null,
        },
      };
    default:
      return state;
  }
}
