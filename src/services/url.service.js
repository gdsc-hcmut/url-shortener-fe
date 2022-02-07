import api from './api';

const UrlAPI = {
  shortenUrl: (longUrl) => api.post('/urls', { longUrl }),
};

export default UrlAPI;
