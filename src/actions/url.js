import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  SHORTEN_URL_WITH_SLUG,
  SHOW_EDIT_URL_MODAL,
  SHOW_DELETE_URL_MODAL,
  EDIT_EXPIRE_TIME,
  INVALID_SLUG,
  SLUG_TAKEN,
  SLUG_EDIT_INVALID,
  UPDATE_URL_LISTS,
  UPDATE_URL_DETAIL,
} from 'action-types';
import { toggleSnackbarOpen } from 'actions/notification';
import domains from 'constant/domain';
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
    const organization = localStorage.getItem('organization');
    const res = await UrlAPI.shortenUrlWithSlug(longUrl, slug, organization);
    let shortUrl;
    if (organization === 'None') {
      shortUrl = res.data.shortUrl;
    } else {
      const domainKey = Object.keys(domains).filter(
        (key) => key === organization,
      );
      const urlDomain = domains[domainKey[0]].domain;
      shortUrl = `${urlDomain}/${res.data.slug}`;
    }
    dispatch({
      type: SHORTEN_URL_WITH_SLUG,
      payload: {
        shortUrl,
        slug: res.data.slug,
      },
    });
  } catch (err) {
    if (err.response.data.errors.message === 'Invalid slug') {
      dispatch({
        type: INVALID_SLUG,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    } else if (err.response.data.errors.message === 'Slug already exists') {
      dispatch({
        type: SLUG_TAKEN,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    } else {
      dispatch({
        type: URL_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
const editSlug = (id, newSlug) => async (dispatch) => {
  try {
    const organization = localStorage.getItem('organization');
    const res = await UrlAPI.editSlug(id, newSlug);
    let shortUrl;
    if (organization === 'None') {
      shortUrl = res.data.shortUrl;
    } else {
      const domainKey = Object.keys(domains).filter(
        (key) => key === organization,
      );
      const urlDomain = domains[domainKey[0]].domain;
      shortUrl = `${urlDomain}/${res.data.slug}`;
    }
    console.log('res data');
    console.log(res.data);
    dispatch({
      type: EDIT_SLUG,
      payload: {
        ...res.data,
        shortUrl,
      },
    });
    console.log('edit done');
    dispatch({
      type: SHOW_EDIT_URL_MODAL,
      payload: false,
    });
  } catch (err) {
    if (err.response.data.errors.message === 'Invalid slug') {
      dispatch({
        type: SLUG_EDIT_INVALID,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    } else if (err.response.data.errors.message === 'Slug already exists') {
      dispatch({
        type: SLUG_ALREADY_EXISTS,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    } else {
      dispatch({
        type: URL_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
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
      type: UPDATE_URL_DETAIL,
      payload: res.data,
    });
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
