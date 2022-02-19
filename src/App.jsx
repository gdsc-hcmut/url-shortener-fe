import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadUser } from 'actions/auth';
import NavbarModal from 'components/Modals/NavbarModal';
import MaterialUIPickers from 'pages/DateTimePicker';
import DeleteModalPage from 'pages/DeleteModalPage';
import DetailPage from 'pages/DetailPage';
import EditSlug from 'pages/EditSlug';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import Homepage from 'pages/Homepage';
import HomepageLogin from 'pages/HomepageLogin';
import LoginPage from 'pages/LoginPage';
import ModalPage from 'pages/ModalPage';
import MyUrlPage from 'pages/MyUrlPage';
import ChangePasswordPage from 'pages/ReplacePasswordPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import SignInPage from 'pages/SignInPage';
import SignUpDesktop from 'pages/SignUpDesktop';
import SignUpPage from 'pages/SignUpPage';
import SnackbarPage from 'pages/SnackbarPage';
import StatisticPage from 'pages/StatisticPage';
import UrlWithSlug from 'pages/UrlWithSlug';
import UserProfilePage from 'pages/UserProfilePage';

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
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/modal-nav" element={<NavbarModal show />} />
          <Route path="/slug" element={<UrlWithSlug />} />
          <Route path="/edit-slug" element={<EditSlug />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/date" element={<MaterialUIPickers />} />
          <Route path="/my-url" element={<MyUrlPage />} />
          <Route path="/delete-modal" element={<DeleteModalPage />} />
          <Route path="/snackbar" element={<SnackbarPage />} />
          <Route path="/stat" element={<StatisticPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
