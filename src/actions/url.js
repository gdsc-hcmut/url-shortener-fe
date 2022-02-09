import {
  SHORTEN_URL,
  URL_ERROR,
  EDIT_SLUG,
  SLUG_ALREADY_EXISTS,
  SHORTEN_URL_WITH_SLUG,
} from 'action-types';
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
      payload: res.data.shortUrl,
    });
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
const editSlug = (slug, newSlug) => async (dispatch) => {
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
        payload: {
          shortUrl: res.data.shortUrl,
          slug: res.data.slug,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: URL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export default { shortenUrl, editSlug, shortenUrlWithSlug };
