import api from './api';

const UrlAPI = {
  shortenUrl: (longUrl) => api.post('/urls', { longUrl }),
  shortenUrlWithSlug: (longUrl, slug) => api.post('/urls/auth', { longUrl, slug }),
};

export default UrlAPI;
