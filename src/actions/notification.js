import {
  TOGGLE_SNACKBAR_OPEN,
  TOGGLE_SNACKBAR_CLOSE,
  SHOW_COPY_SUCCESS_MODAL,
} from 'action-types';

export const toggleSnackbarOpen = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_OPEN });
};

export const toggleSnackbarClose = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_CLOSE });
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
