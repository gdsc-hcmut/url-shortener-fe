import api from './api';

const AdminAPI = {
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
  addUrlByID: (id) => api.post(`/admin/blacklist-url/${id}`),
  deleteUrlBlacklist: (id) => api.delete(`/admin/blacklist-url/${id}`),
  findAddingUrl: (keyword) => api.get(`/admin/blacklist-url/search?keyword=${keyword}`),
  checkAdmin: () => api.get('/admin/test'),
};

export default AdminAPI;
