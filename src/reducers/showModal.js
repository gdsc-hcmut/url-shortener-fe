const SHOW_MODAL = 'SHOW_MODAL';

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
