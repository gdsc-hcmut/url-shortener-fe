/* eslint-disable */
const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user.refreshToken;
  // return user?.refreshToken;
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user.accessToken;
  // return user?.accessToken;
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
  console.log(JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem('user');
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
