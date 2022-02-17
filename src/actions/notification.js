import {
  TOGGLE_SNACKBAR_OPEN,
  TOGGLE_SNACKBAR_CLOSE,
  SHOW_COPY_SUCCESS_MODAL,
} from 'action-types';

const { REACT_APP_SHORTEN_BASE_URL } = process.env;

export const toggleSnackbarOpen = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_OPEN });
};

export const toggleSnackbarClose = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_CLOSE });
};

export const toggleSuccessModalOpen = (slug) => (dispatch) => {
  navigator.clipboard.writeText(`${REACT_APP_SHORTEN_BASE_URL}/${slug}`);
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
