import axios from 'axios';

import API_URL from 'config';

const UrlAPI = {
  shortenUrl: (longUrl) => axios.post(`${API_URL}/api/url/shorten`, { longUrl }),
};

export default UrlAPI;
