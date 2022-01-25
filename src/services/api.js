import axios from 'axios';

import TokenService from './token.service';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      // eslint-disable-next-line
      config.headers.Authorization = `Bearer ${token}`; // for Spring Boot back-end
      // config.headers['x-access-token'] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/auth' && err.response) {
      // Access Token was expired
      // status 401
      // eslint-disable-next-line
      if (err.response.status === 500 && !originalConfig._retry) {
        // eslint-disable-next-line
        originalConfig._retry = true;

        try {
          const rs = await instance.post('/token/refresh', {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          const { accessToken, refreshToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);
          TokenService.updateLocalRefreshToken(refreshToken);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default instance;
