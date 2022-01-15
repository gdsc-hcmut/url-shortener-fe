import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const UrlAPI = {
  shortenUrl: (longUrl) => axios.post(`${REACT_APP_API_URL}/api/urls`, { longUrl }),
};

export default UrlAPI;
