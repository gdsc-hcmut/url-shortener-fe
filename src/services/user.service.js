import api from './api';

const UserAPI = {
  signUpUser: (firebaseToken) => api.post('/users', { firebaseToken }),
  loginUser: (firebaseToken) => api.post('/auth', { firebaseToken }),
  editProfile: (name, email, dateOfBirth, avatar) => api.patch('/users/edit-profile', {
    name,
    email,
    dateOfBirth,
    avatar,
  }),
};

export default UserAPI;
