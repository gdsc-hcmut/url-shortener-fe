import api from './api';

const UserAPI = {
  signUpUser: (firebaseToken) => api.post('/users', { firebaseToken }),
  loginUser: (firebaseToken) => api.post('/auth', { firebaseToken }),
};

export default UserAPI;
