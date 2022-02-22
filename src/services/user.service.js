import api from './api';

const UserAPI = {
  signUpUser: (firebaseToken) => api.post('/users', { firebaseToken }),
  loginUser: (firebaseToken) => api.post('/auth', { firebaseToken }),
  editProfile: (name, newEmail, email, dateOfBirth) => api.patch('/users/edit-profile', {
    name,
    newEmail,
    email,
    dateOfBirth,
  }),
};

export default UserAPI;
