import {
  GOOGLE_LOADING_ANIMATION_OPACITY,
  GOOGLE_LOADING_ANIMATION_WHITE_BACKGROUND,
} from 'action-types';

const defaultSetUp = {
  background: false,
};
// eslint-disable-next-line default-param-last
export default (state = defaultSetUp, { type, payload }) => {
  switch (type) {
    case GOOGLE_LOADING_ANIMATION_OPACITY:
      return {
        ...state,
        background: payload,
      };
    case GOOGLE_LOADING_ANIMATION_WHITE_BACKGROUND:
      return {
        ...state,
        background: payload,
      };
    default:
      return state;
  }
};
