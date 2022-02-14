import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  SHORTEN_URL_WITH_SLUG,
  SHOW_EDIT_URL_MODAL,
  SHOW_DELETE_URL_MODAL,
  EDIT_EXPIRE_TIME,
  UPDATE_URL_LISTS,
} from 'action-types';
import { toggleSnackbarOpen } from 'actions/notification';
import UrlAPI from 'services/url.service';

const shortenUrl = (longUrl) => async (dispatch) => {
  try {
    const res = await UrlAPI.shortenUrl(longUrl);

    dispatch({
      type: SHORTEN_URL,
      payload: {
        shortUrl: res.data.shortUrl,
        slug: res.data.slug,
      },
    });
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

const shortenUrlWithSlug = (longUrl, slug) => async (dispatch) => {
  try {
    const res = await UrlAPI.shortenUrlWithSlug(longUrl, slug);
    dispatch({
      type: SHORTEN_URL_WITH_SLUG,
      payload: {
        shortUrl: res.data.shortUrl,
        slug: res.data.slug,
      },
    });
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
const editSlug = (slug, newSlug, urlList) => async (dispatch) => {
  try {
    const res = await UrlAPI.editSlug(slug, newSlug);
    if (res.data.SLUG_ALREADY_EXISTS === 'Slug already exists') {
      dispatch({
        type: SLUG_ALREADY_EXISTS,
        payload: res.data.SLUG_ALREADY_EXISTS,
      });
    } else {
      dispatch({
        type: EDIT_SLUG,
        payload: res.data,
      });
      dispatch({
        type: SHOW_EDIT_URL_MODAL,
        payload: false,
      });
      dispatch({
        type: UPDATE_URL_LISTS,
        payload: urlList.map((url) => {
          if (url.slug === slug) {
            return { ...url, slug: newSlug };
          }
          return url;
        }),
      });
    }
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
const deleteUrl = (id, urlList) => async (dispatch) => {
  try {
    await UrlAPI.deleteUrl(id);
    dispatch({
      type: SHOW_DELETE_URL_MODAL,
      payload: false,
    });
    dispatch({
      type: UPDATE_URL_LISTS,
      payload: urlList.filter((url) => url.id !== id),
    });
    dispatch(toggleSnackbarOpen());
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
const editExpireTime = (id, newExpireTime) => async (dispatch) => {
  try {
    const res = await UrlAPI.editExpireTime(id, newExpireTime);
    dispatch({
      type: EDIT_EXPIRE_TIME,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export default {
  shortenUrl,
  editSlug,
  shortenUrlWithSlug,
  deleteUrl,
  editExpireTime,
};
