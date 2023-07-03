/* eslint-disable react/jsx-wrap-multilines */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadUser } from 'actions/auth';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import Banner from 'assets/image/banner.png';
import Modal from 'components/Modal';
import RequireAuth from 'components/RequireAuth';
import ChangePasswordPage from 'pages/ChangePasswordPage';
import DetailPage from 'pages/DetailPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import HomepageLogin from 'pages/HomepageLogin';
import MyUrlPage from 'pages/MyUrlPage';
import UrlV2Page from 'pages/MyUrlV2Page';
import NotFoundPage from 'pages/NotFoundPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import SignInMobilePage from 'pages/SignInMobilePage';
import SignUpMobilePage from 'pages/SignUpMobilePage';
import StatisticPage from 'pages/StatisticPage';
import URLFilterPage from 'pages/URLFilterPage';
import URLInformationPage from 'pages/URLInformationPage';
import UserProfilePage from 'pages/UserProfilePage';
import VerifiedEmailPage from 'pages/VerifiedEmailPage';

import store from './store';
import './index.css';
import setAuthToken from './utils/setAuthToken';

if (localStorage.user) {
  setAuthToken();
}

export default function App() {
  const [showBanner, setShowBanner] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleBannerClose = () => {
    if (isAuthenticated) {
      localStorage.setItem('last_login', JSON.stringify(Date.now()));
    }
    setShowBanner(false);
  };

  useEffect(() => store.dispatch(loadUser()), []);

  useEffect(() => {
    const bannerDisabledTime = JSON.parse(
      localStorage.getItem('last_login') || null,
    );
    const currentTime = Date.now();
    if (
      bannerDisabledTime === null
      || currentTime - bannerDisabledTime > 1000 * 60 * 30
    ) {
      setShowBanner(true);
    }
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Modal show={showBanner}>
          <div className="relative">
            <button
              aria-hidden="true"
              type="button"
              className="absolute
                    flex flex-col justify-center items-center transition-all duration-300 ease-out
                    -right-8 -top-8 rounded"
              onClick={handleBannerClose}
            >
              <CloseIcon className="w-6 h-6 fill-white" fill="white" />
            </button>
            <a
              href="https://gdsc.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Banner} alt="Banner" />
            </a>
          </div>
        </Modal>
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
          <Route path="/__/auth" element={<ResetPasswordPage />} />
          <Route path="/verified-email" element={<VerifiedEmailPage />} />
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
          <Route
            path="/statistics"
            element={
              <RequireAuth redirectTo="/">
                <StatisticPage />
              </RequireAuth>
            }
          />
          <Route path="/error/not-found" element={<NotFoundPage />} />
          <Route path="/url-filter" element={<URLFilterPage />} />
          <Route path="/users/:id" element={<URLInformationPage />} />
          <Route path="/url-v2" element={<UrlV2Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
