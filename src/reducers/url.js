import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  EDIT_EXPIRE_TIME,
  SLUG_EDIT_INVALID,
  UPDATE_URL_LISTS,
} from 'action-types';

const initialState = {
  shortenedUrl: 'loading...',
  slug: 'loading...',
  slugExist: false,
  error: {},
  data: {},
  invalidSlug: {},
  newSlug: '',
  newExpireTime: null,
  urlList: [],
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHORTEN_URL:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        slug: payload.slug,
        slugExist: false,
        error: {},
        invalidSlug: {},
      };
    case EDIT_SLUG:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        newSlug: payload.slug,
        slugExist: false,
        error: {},
        invalidSlug: {},
      };
    case SLUG_ALREADY_EXISTS:
      return {
        ...state,
        slugExist: true,
        error: payload,
        invalidSlug: {},
      };
    case EDIT_EXPIRE_TIME:
      return {
        ...state,
        data: payload,
        slugExist: false,
        invalidSlug: {},
        newExpireTime: payload.expireTime,
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
        slugExist: false,
        invalidSlug: {},
      };
    case SLUG_EDIT_INVALID:
      return {
        ...state,
        error: {},
        slugExist: false,
        invalidSlug: payload,
      };
    case UPDATE_URL_LISTS:
      return {
        ...state,
        urlList: payload,
      };
    default:
      return state;
  }
};
