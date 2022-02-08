import {
  SHORTEN_URL_WITH_SLUG,
  URL_ERROR,
  SLUG_ALREADY_EXISTS,
} from 'action-types';

const initialState = {
  shortenedUrl: null,
  slugExist: false,
  error: {},
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHORTEN_URL_WITH_SLUG:
      return {
        ...state,
        slugExist: false,
        shortenedUrl: payload,
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SLUG_ALREADY_EXISTS:
      return {
        ...state,
        slugExist: true,
        error: payload,
      };
    default:
      return state;
  }
};
