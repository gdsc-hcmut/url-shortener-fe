import { SHOW_MODAL } from 'action-types';

const defaultSetUp = {
  visibility: false,
};
export default ({ type, payload } = {}, state = defaultSetUp) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        visibility: payload,
      };
    default:
      return state;
  }
};
