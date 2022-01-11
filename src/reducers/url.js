/* eslint-disable */
import { SHORTEN_URL, URL_ERROR } from 'action-types';

const initialState = {
  shortenedUrl: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHORTEN_URL:
      return {
        ...state,
        shortenedUrl: payload,
      };
    case URL_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
