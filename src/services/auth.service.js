import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
      console.log(firebaseToken);
      return firebaseToken;
    })
    .then((firebaseToken) => {
      console.log('call api');
      const res = api.post('/users', { firebaseToken });
      console.log('res', res);
      return res;
    })
    .then((res) => {
      if (res.data.token) {
        TokenService.setUser(res.data.token);
      }
      console.log(res.data);
      return res.data; // { user, token }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errCode', errorCode);
      console.log('errMessage', errorMessage);
    });
};

const login = async (email, password) => {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const firebaseToken = userCredential.user.accessToken;
      localStorage.setItem('firebaseToken', firebaseToken);
      return firebaseToken;
    })
    .then((firebaseToken) => api.post('/auth', { firebaseToken }))
    .then((res) => {
      if (res.data.token) {
        TokenService.setUser(res.data.token);
      }
      return res.data;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

const logout = () => {
  const auth = getAuth();

  TokenService.removeUser();
  signOut(auth)
    .then(() => console.log('logged out'))
    .catch((error) => {
      console.log(error);
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

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
