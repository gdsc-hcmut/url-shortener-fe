import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadUser } from 'actions/auth';
import HomepageLogin from 'pages/HomepageLogin';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import ChangePasswordPage from 'pages/ChangePasswordPage';

import ChangePasswordPage from './pages/ChangePasswordPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ModalPage from './pages/ModalPage';
import SignInPage from './pages/SignInPage';
import SignUpDesktop from './pages/SignUpDesktop';
import SignUpPage from './pages/SignUpPage';
import store from './store';
import './index.css';
import setAuthToken from './utils/setAuthToken';

if (localStorage.user) {
  setAuthToken();
}

export default function App() {
  useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/sign-up-firebase" element={<SignUpPage />} />
          <Route path="/sign-in-firebase" element={<SignInPage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/sign-up-page" element={<SignUpDesktop />} />
          <Route path="/user-home" element={<HomepageLogin />} />
          <Route path="/reset-pass" element={<ResetPasswordPage />} />
          <Route path="/change-pass" element={<ChangePasswordPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
