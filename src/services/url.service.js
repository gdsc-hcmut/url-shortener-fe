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
  getAllUrl: (page, keyword, userId, optionClick, optionCreated) => api.get(
    `/admin/url-filter/get-all-url?page=${page}&keyword=${keyword}&userId=${userId}&optionClick=${optionClick}&optionCreated=${optionCreated}`,
  ),
  getUserByEmail: (keyword) => api.get(`admin/url-filter/get-user-by-email?keyword=${keyword}`),
  getUrlDetail: (id) => api.get(`admin/url-filter/get-url/${id}`),
  searchDomain: (date, keyword, page) => api.get(
    `/admin/blacklist-domain?page=${page}&date=${date}&keyword=${keyword}`,
  ),
  addDomain: (domain) => api.post(`/admin/blacklist-domain?link=${domain}`),
  deleteDomain: (id) => api.delete(`/admin/blacklist-domain/${id}`),
  searchUrlBySlug: (date, keyword, page) => api.get(
    `/admin/blacklist-url?page=${page}&date=${date}&keyword=${keyword}`,
  ),
  // addUrlBySlug: (slug) => api.post(`/admin/blacklist-url?slug=${slug}`),
  addUrlByID: (id) => api.post(`/admin/blacklist-url/${id}`),
  deleteUrlBlacklist: (id) => api.delete(`/admin/blacklist-url/${id}`),
  findAddingUrl: (keyword) => api.get(`/admin/blacklist-url/search?keyword=${keyword}`),
  checkAdmin: () => api.get('/admin/test'),
};

export default UrlAPI;
