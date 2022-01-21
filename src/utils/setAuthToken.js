import axios from 'axios';

const setAuthToken = () => {
  const { accessToken } = localStorage;
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
