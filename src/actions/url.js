import { SHORTEN_URL, URL_ERROR } from 'action-types';
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

export default shortenUrl;
