import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification,
} from 'firebase/auth';

import { CHANGE_PASSWORD_LOADING } from 'action-types';
import { clearError, setError } from 'actions/error';
import { showInfoBar } from 'actions/notification';
import store from 'store';
import setAuthToken from 'utils/setAuthToken';

import api from './api';
import TokenService from './token.service';

const register = async (email, password) => {
  try {
    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await sendEmailVerification(auth.currentUser);

    const firebaseToken = userCredential.user.accessToken;
    localStorage.setItem('firebaseToken', firebaseToken);

    const res = await api.post('/users', { firebaseToken });

    if (res.data.token) {
      TokenService.setUser(res.data.token);
    }
    store.dispatch(showInfoBar(email));
    return res.data;
  } catch (error) {
    return store.dispatch(setError(error.code));
  }
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
    .catch((error) => {
      store.dispatch(setError(error.code));
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
      console.log(err.code);
    });
};

const changePassword = async (newPassword, oldPassword) => {
  const auth = getAuth();
  const credentials = EmailAuthProvider.credential(
    auth.currentUser.email,
    oldPassword,
  );
  return reauthenticateWithCredential(auth.currentUser, credentials)
    .then(() => {
      updatePassword(auth.currentUser, newPassword)
        .then(() => {
          store.dispatch(clearError());
          store.dispatch({
            type: CHANGE_PASSWORD_LOADING,
          });
          console.log('password update');
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      store.dispatch(setError(error.code));
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changeEmail,
  changePassword,
};

export default AuthService;
