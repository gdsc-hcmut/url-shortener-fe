import api from './api';

const UrlAPI = {
  shortenUrl: (longUrl) => api.post('/urls', { longUrl }),
  shortenUrlWithSlug: (longUrl, slug, organization) => api.post('/urls/auth', { longUrl, slug, organization }),
  editSlug: (slug, newSlug) => api.patch('/urls/edit-slug', { slug, newSlug }),
  getUrlList: (page, sortOption) => api.get(`/urls?page=${page}&sortOption=${sortOption}`),
  searchUrl: (q) => api.get(`/urls/search?q=${q}`),
  getUrlById: (id) => api.get(`/urls/${id}`),
  deleteUrl: (id) => api.delete(`/urls/${id}`),
  editExpireTime: (id, newExpireTime) => api.patch(`/urls/${id}/expire`, { newExpireTime }),
  getStatistic: (chartFilter) => api.get(`/urls/statistic?chartFilter=${chartFilter}`),
  searchDomain: (date, keyword, page) => api.get(
    `/admin/blacklist-domain?page=${page}&date=${date}&keyword=${keyword}`,
  ),
  addDomain: (domain) => api.post(`/admin/blacklist-domain?link=${domain}`),
  deleteDomain: (id) => api.delete(`/admin/blacklist-domain/${id}`),
  searchUrlBySlug: (date, keyword, page) => api.get(
    `/admin/blacklist-url?page=${page}&date=${date}&keyword=${keyword}`,
  ),
  addUrlBySlug: (slug) => api.post(`/admin/blacklist-url?slug=${slug}`),
  deleteUrlBlacklist: (id) => api.delete(`/admin/blacklist-url/${id}`),
};

export default UrlAPI;
