import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from 'action-types';
import AuthService from 'services/auth.service';

export const loadUser = () => async (dispatch) => {
  try {
    const data = await AuthService.getCurrentUser();

    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
    console.log(AUTH_ERROR);
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    console.log('sign up pressed');
    const { user, token } = await AuthService.register(email, password);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user, token },
    });

    dispatch(loadUser());
  } catch (err) {
    console.log('error', err);
    // console.log(err.response.data);
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

    dispatch(loadUser());
  } catch (err) {
    console.log(err.response.data);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({ type: LOGOUT });
};
