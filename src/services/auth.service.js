/* eslint-disable operator-linebreak */
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
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from 'firebase/auth';

import { USER_LOADED } from 'action-types';
import { clearError, setError } from 'actions/error';
import {
  toggleChangePasswordSnackbarOpen,
  showInfoBar,
  toggleChangePasswordLoadingIndicator,
  showResetPasswordSuccessMessage,
} from 'actions/notification';
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
    if (
      error.response &&
      error.response.data.errors.message === 'Email has been taken'
    ) {
      store.dispatch(setError('auth/email-already-in-use'));
    }
    return store.dispatch(setError(error.code));
  }
};

const login = async (email, password) => {
  const auth = getAuth();
  const { passwordCreated } = store.getState().auth.user;
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
      if (passwordCreated) store.dispatch(setError(error.code));
    });
};

const loginWithGoogle = async (tokenId) => {
  try {
    const res = await api.post('/auth/signin-with-google', { tokenId });

    if (res.data.token) {
      TokenService.setUser(res.data.token);
    }
    return res.data;
  } catch (error) {
    return store.dispatch(setError(error.code));
  }
};

const logout = () => {
  const auth = getAuth();

  TokenService.removeUser();
  signOut(auth).catch((err) => {
    console.log(err);
  });
};

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
  const data = await getCurrentUser();
  store.dispatch({
    type: USER_LOADED,
    payload: data,
  });
  const { passwordCreated, email } = store.getState().auth.user;
  if (!passwordCreated) {
    try {
      api.patch('/auth/change-password', { newPassword }).then((res) => {
        store.dispatch(clearError());
        store.dispatch(toggleChangePasswordSnackbarOpen());
        store.dispatch(toggleChangePasswordLoadingIndicator());
        console.log('password update');
        return res.data;
      });
    } catch (err) {
      console.log(err);
    }
  }

  await login(email, oldPassword);

  const auth = getAuth();
  const credentials = EmailAuthProvider.credential(
    auth.currentUser.email,
    oldPassword,
  );
  return reauthenticateWithCredential(auth.currentUser, credentials)
    .then(async () => {
      await updatePassword(auth.currentUser, newPassword)
        .then(() => {
          store.dispatch(clearError());
          store.dispatch(toggleChangePasswordSnackbarOpen());
          store.dispatch(toggleChangePasswordLoadingIndicator());
          console.log('password update');
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((error) => {
      if (passwordCreated) store.dispatch(setError(error.code));
      else console.log(error.code);
    });
};

const resetPassword = async (email) => {
  try {
    const auth = getAuth();

    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};

const resetToNewPassword = async (oobCode, newPassword) => {
  try {
    const auth = getAuth();

    await confirmPasswordReset(auth, oobCode, newPassword);
    return store.dispatch(showResetPasswordSuccessMessage());
  } catch (error) {
    return store.dispatch(setError(error.code));
  }
};

const verifyResetCode = async (oobCode) => {
  try {
    const auth = getAuth();

    return await verifyPasswordResetCode(auth, oobCode);
  } catch (error) {
    return store.dispatch(setError(error.code));
  }
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  changeEmail,
  changePassword,
  resetPassword,
  resetToNewPassword,
  verifyResetCode,
  loginWithGoogle,
};

export default AuthService;
