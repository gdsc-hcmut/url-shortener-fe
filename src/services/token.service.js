import _ from 'lodash';

const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return _.get(user, 'refreshToken', 'jwt');
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return _.get(user, 'accessToken', 'jwt');
};

const updateLocalRefreshToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.refreshToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

const updateLocalAccessToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.accessToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

const getUser = () => JSON.parse(localStorage.getItem('user'));

const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userBirthday');
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalRefreshToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
