import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from 'action-types';

const initialState = {
  toggleSnackbar: false,
  snackbarMessage: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        toggleSnackbar: true,
        snackbarMessage: payload,
      };
    }
    case TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        toggleSnackbar: false,
        snackbarMessage: null,
      };
    }
    default: {
      return state;
    }
  }
}
