import {
  SHORTEN_URL_WITH_SLUG,
  URL_ERROR,
  INVALID_SLUG,
  SLUG_TAKEN,
} from 'action-types';

const initialState = {
  shortenedUrl: 'loading...',
  slug: 'loading...',
  error: {},
  invalidSlug: {},
  slugTaken: false,
  loading: true,
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHORTEN_URL_WITH_SLUG:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        slug: payload.slug,
        error: {},
        invalidSlug: {},
        slugTaken: false,
        loading: false,
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
        invalidSlug: {},
        slugTaken: false,
        loading: false,
      };
    case INVALID_SLUG:
      return {
        ...state,
        error: {},
        invalidSlug: payload,
        slugTaken: false,
        loading: false,
      };
    case SLUG_TAKEN:
      return {
        ...state,
        error: {},
        invalidSlug: {},
        slugTaken: true,
        loading: false,
      };
    default:
      return state;
  }
};
