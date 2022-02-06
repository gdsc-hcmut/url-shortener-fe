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
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/auth/signin' && err.response) {
      // eslint-disable-next-line
      if (err.response.status === 401 && !originalConfig._retry) {
        // eslint-disable-next-line
        originalConfig._retry = true;

        try {
          console.log('before sending req');
          const rs = await instance.post('/token/refresh', {
            refreshToken: TokenService.getLocalRefreshToken(),
          });

          console.log(rs);

          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);

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
