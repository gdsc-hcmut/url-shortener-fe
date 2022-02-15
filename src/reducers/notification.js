import { TOGGLE_SNACKBAR_OPEN, TOGGLE_SNACKBAR_CLOSE } from 'action-types';

const initialState = {
  show: false,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case TOGGLE_SNACKBAR_OPEN: {
      return {
        ...state,
        show: true,
      };
    }
    case TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        show: false,
      };
    }
    default: {
      return state;
    }
  }
}
