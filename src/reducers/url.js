import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  EDIT_EXPIRE_TIME,
  SLUG_EDIT_INVALID,
  UPDATE_URL_LISTS,
  UPDATE_URL_DETAIL,
  CHANGE_SORT_OPTION,
} from 'action-types';
import { LATEST } from 'constant/options';

const initialState = {
  shortenedUrl: 'loading...',
  slug: 'loading...',
  slugExist: false,
  error: {},
  data: {},
  invalidSlug: {},
  newSlug: '',
  urlList: [],
  urlDetail: {},
  loading: true,
  option: LATEST,
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
        loading: false,
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
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
        slugExist: false,
        invalidSlug: {},
        loading: false,
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
    case UPDATE_URL_DETAIL:
      console.log('payload', payload);
      return {
        ...state,
        urlDetail: payload,
        shortenedUrl: payload.shortUrl,
      };
    case CHANGE_SORT_OPTION:
      return {
        ...state,
        option: payload,
      };
    default:
      return state;
  }
};
