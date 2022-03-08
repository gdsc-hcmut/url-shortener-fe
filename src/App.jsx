/* eslint-disable react/jsx-wrap-multilines */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadUser } from 'actions/auth';
import RequireAuth from 'components/RequireAuth';
import ChangePasswordPage from 'pages/ChangePasswordPage';
import DetailPage from 'pages/DetailPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import HomepageLogin from 'pages/HomepageLogin';
import MyUrlPage from 'pages/MyUrlPage';
import NotFoundPage from 'pages/NotFoundPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import SignInMobilePage from 'pages/SignInMobilePage';
import SignUpMobilePage from 'pages/SignUpMobilePage';
import StatisticPage from 'pages/StatisticPage';
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
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInMobilePage />} />
            <Route path="/sign-up" element={<SignUpMobilePage />} />
            <Route
              path="/home"
              element={
                <RequireAuth redirectTo="/">
                  <HomepageLogin />
                </RequireAuth>
              }
            />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route
              path="/change-password"
              element={
                <RequireAuth redirectTo="/">
                  <ChangePasswordPage />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth redirectTo="/">
                  <UserProfilePage />
                </RequireAuth>
              }
            />
            <Route
              path="/urls"
              element={
                <RequireAuth redirectTo="/">
                  <MyUrlPage />
                </RequireAuth>
              }
            />
            <Route
              path="/urls/:id"
              element={
                <RequireAuth redirectTo="/">
                  <DetailPage />
                </RequireAuth>
              }
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/stat" element={<StatisticPage />} />
            <Route path="/statistics" element={<StatisticPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </Provider>
  );
}
