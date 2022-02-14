import api from './api';

const UrlAPI = {
  shortenUrl: (longUrl) => api.post('/urls', { longUrl }),
  shortenUrlWithSlug: (longUrl, slug) => api.post('/urls/auth', { longUrl, slug }),
  editSlug: (slug, newSlug) => api.post('/urls/edit-slug', { slug, newSlug }),
  getUrlList: async (page) => api.get(`/urls?page=${page}`),
};

export default UrlAPI;
