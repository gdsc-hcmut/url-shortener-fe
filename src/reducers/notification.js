import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from 'action-types';

const initialState = {
  showSnackbar: false,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        showSnackbar: true,
      };
    }
    case TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        showSnackbar: false,
      };
    }
    default: {
      return state;
    }
  }
}
