import api from './api';

const UrlAPI = {
  shortenUrl: (longUrl) => api.post('/urls', { longUrl }),
  shortenUrlWithSlug: (longUrl, slug, email) => api.post('/urls/auth', { longUrl, slug, email }),
  editSlug: (slug, newSlug, email) => api.patch('/urls/edit-slug', { slug, newSlug, email }),
  getUrlList: (page, sortOption) => api.get(`/urls?page=${page}&sortOption=${sortOption}`),
  searchUrl: (q) => api.get(`/urls/search?q=${q}`),
  getUrlById: (id) => api.get(`/urls/${id}`),
  deleteUrl: (id) => api.delete(`/urls/${id}`),
  editExpireTime: (id, newExpireTime) => api.patch(`/urls/${id}/expire`, { newExpireTime }),
  getStatistic: (chartFilter) => api.get(`/urls/statistic?chartFilter=${chartFilter}`),
};

export default UrlAPI;
