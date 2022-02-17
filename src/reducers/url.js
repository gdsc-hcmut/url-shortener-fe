import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  EDIT_EXPIRE_TIME,
} from 'action-types';

const initialState = {
  shortenedUrl: 'loading...',
  slug: 'loading...',
  slugExist: false,
  error: {},
  data: {},
  newSlug: '',
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHORTEN_URL:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        slug: payload.slug,
        slugExist: false,
      };
    case EDIT_SLUG:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        newSlug: payload.slug,
        slugExist: false,
      };
    case SLUG_ALREADY_EXISTS:
      return {
        ...state,
        slugExist: true,
        error: payload,
      };
    case EDIT_EXPIRE_TIME:
      return {
        ...state,
        data: payload,
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
