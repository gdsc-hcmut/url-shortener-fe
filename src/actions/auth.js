import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_WITH_GOOGLE_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SHOW_LOG_IN_MODAL,
  SHOW_SIGN_UP_MODAL,
  UPDATE_URL_LISTS,
  IS_ADMIN,
} from 'action-types';
import AuthService from 'services/auth.service';
import checkAdmin from 'utils/checkAdmin';

import { clearError } from './error';

export const loadUser = () => async (dispatch) => {
  try {
    const data = await AuthService.getCurrentUser();
    const isAdmin = await checkAdmin();
    console.log(isAdmin);
    dispatch({
      type: IS_ADMIN,
      payload: { isAdmin },
    });

    localStorage.setItem('userName', data.name);
    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userBirthday', data.dateOfBirth);
    localStorage.setItem('organization', data.currentOrganization || 'None');
    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (err) {
    dispatch(clearError());
    await dispatch({
      type: UPDATE_URL_LISTS,
      payload: [],
    });
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const signup = (email, password) => async (dispatch) => {
  try {
    const { user, token } = await AuthService.register(email, password);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user, token },
    });

    dispatch({
      type: SHOW_SIGN_UP_MODAL,
      payload: false,
    });

    dispatch(clearError());

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const { user, token } = await AuthService.login(email, password);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user, token },
    });

    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: false,
    });

    dispatch(clearError());

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const loginWithGoogle = (tokenId) => async (dispatch) => {
  try {
    const { user, token } = await AuthService.loginWithGoogle(tokenId);

    dispatch({
      type: LOGIN_WITH_GOOGLE_SUCCESS,
      payload: { user, token },
    });

    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: false,
    });
    dispatch({
      type: SHOW_SIGN_UP_MODAL,
      payload: false,
    });
    dispatch(clearError());

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch(clearError());
  dispatch({
    type: UPDATE_URL_LISTS,
    payload: [],
  });
  dispatch({ type: LOGOUT });
};
