import {
  TOGGLE_SNACKBAR_OPEN,
  TOGGLE_SNACKBAR_CLOSE,
  SHOW_INFO_BAR,
  CLOSE_INFO_BAR,
} from 'action-types';

const initialState = {
  showSnackbar: false,
  showingInfoBar: false,
  email: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

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
    case SHOW_INFO_BAR: {
      return {
        ...state,
        showingInfoBar: true,
        email: payload,
      };
    }
    case CLOSE_INFO_BAR: {
      return {
        ...state,
        showingInfoBar: false,
        email: null,
      };
    }
    default: {
      return state;
    }
  }
}
