import axios from 'axios';

// import API_URL from 'config';

const { REACT_APP_API_URL } = process.env;

const UrlAPI = {
  shortenUrl: (longUrl) => axios.post(`${REACT_APP_API_URL}/api/url/shorten`, { longUrl }),
};

export default UrlAPI;
