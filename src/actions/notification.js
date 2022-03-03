import {
  TOGGLE_SNACKBAR_OPEN,
  TOGGLE_SNACKBAR_CLOSE,
  TOGGLE_CHANGE_PASSWORD_SNACKBAR_OPEN,
  TOGGLE_CHANGE_PASSWORD_SNACKBAR_CLOSE,
  SHOW_COPY_SUCCESS_MODAL,
  SHOW_INFO_BAR,
  CLOSE_INFO_BAR,
} from 'action-types';

export const toggleSnackbarOpen = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_OPEN });
};

export const toggleSnackbarClose = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_CLOSE });
};

export const toggleChangePasswordSnackbarOpen = () => (dispatch) => {
  dispatch({ type: TOGGLE_CHANGE_PASSWORD_SNACKBAR_OPEN });
};

export const toggleChangePasswordSnackbarClose = () => (dispatch) => {
  dispatch({ type: TOGGLE_CHANGE_PASSWORD_SNACKBAR_CLOSE });
};

export const showInfoBar = (email) => (dispatch) => {
  dispatch({ type: SHOW_INFO_BAR, payload: email });
};

export const closeInfoBar = () => (dispatch) => {
  dispatch({ type: CLOSE_INFO_BAR });
};

export const toggleSuccessModalOpen = () => (dispatch) => {
  dispatch({
    type: SHOW_COPY_SUCCESS_MODAL,
    payload: true,
  });
};

export const toggleSuccessModalClose = () => (dispatch) => {
  dispatch({
    type: SHOW_COPY_SUCCESS_MODAL,
    payload: false,
  });
};
