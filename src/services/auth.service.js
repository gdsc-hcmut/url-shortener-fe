import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
} from 'firebase/auth';

import setAuthToken from 'utils/setAuthToken';

import api from './api';
import TokenService from './token.service';

const register = async (email, password) => {
  const auth = getAuth();

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const firebaseToken = userCredential.user.accessToken;
      localStorage.setItem('firebaseToken', firebaseToken);
      return firebaseToken;
    })
    .then((firebaseToken) => {
      const res = api.post('/users', { firebaseToken });
      return res;
    })
    .then((res) => {
      if (res.data.token) {
        TokenService.setUser(res.data.token);
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const login = async (email, password) => {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const firebaseToken = userCredential.user.accessToken;
      localStorage.setItem('firebaseToken', firebaseToken);
      return firebaseToken;
    })
    .then((firebaseToken) => api.post('/auth/signin', { firebaseToken }))
    .then((res) => {
      if (res.data.token) {
        TokenService.setUser(res.data.token);
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = () => {
  const auth = getAuth();

  TokenService.removeUser();
  signOut(auth).catch((err) => {
    console.log(err);
  });
};

// const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));
const getCurrentUser = async () => {
  if (localStorage.user) {
    setAuthToken(localStorage.user);
  }

  const res = await api.get('/auth');
  return res.data;
};
const changeEmail = async (newEmail) => {
  const auth = getAuth();
  return updateEmail(auth.currentUser, newEmail)
    .then(() => {
      console.log('email update');
    })
    .catch((err) => {
      console.log(err);
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changeEmail,
};

export default AuthService;
