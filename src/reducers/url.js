import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  EDIT_EXPIRE_TIME,
  UPDATE_URL_LISTS,
} from 'action-types';

const initialState = {
  shortenedUrl: 'loading...',
  slug: 'loading...',
  qrCode: 'loding...',
  slugExist: false,
  error: {},
  data: {},
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
        qrCode: payload.qrCode,
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
        newExpireTime: payload.expireTime,
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
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
