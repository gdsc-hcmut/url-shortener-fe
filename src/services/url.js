import axios from 'axios';

// import API_URL from 'config';

const API_URL = process.env;

const UrlAPI = {
  shortenUrl: (longUrl) => axios.post(`${API_URL}/api/url/shorten`, { longUrl }),
};

export default UrlAPI;
