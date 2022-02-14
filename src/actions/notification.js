import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from 'action-types';

export const toggleSnackbarOpen = (message) => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_OPEN, payload: message });
};

export const toggleSnackbarClose = () => (dispatch) => {
  dispatch({ type: TOGGLE_SNACKBAR_CLOSE });
};
