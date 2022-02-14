import { SHORTEN_URL_WITH_SLUG, URL_ERROR } from 'action-types';

const initialState = {
  shortenedUrl: 'loading...',
  qrCode: 'lodaing...',
  error: {},
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SHORTEN_URL_WITH_SLUG:
      return {
        ...state,
        shortenedUrl: payload.shortUrl,
        qrCode: payload.qrCode,
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
