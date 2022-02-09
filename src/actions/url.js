import { SHORTEN_URL, URL_ERROR, SHORTEN_URL_WITH_SLUG } from 'action-types';
import UrlAPI from 'services/url.service';

const shortenUrl = (longUrl) => async (dispatch) => {
  try {
    const res = await UrlAPI.shortenUrl(longUrl);

    dispatch({
      type: SHORTEN_URL,
      payload: res.data.shortUrl,
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

export default { shortenUrl, shortenUrlWithSlug };
