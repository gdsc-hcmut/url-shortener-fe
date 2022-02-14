import { SHORTEN_URL_WITH_SLUG, URL_ERROR } from 'action-types';

const initialState = {
  shortenedUrl: 'loading...',
  slug: 'loading...',
  error: {},
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHORTEN_URL_WITH_SLUG:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        slug: payload.slug,
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
