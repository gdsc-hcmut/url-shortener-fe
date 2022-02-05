const SHOW_MODAL = 'SHOW_MODAL';

const defaultSetUp = {
  visibility: false,
};
// eslint-disable-next-line default-param-last
export default (state = defaultSetUp, { type, payload }) => {
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
