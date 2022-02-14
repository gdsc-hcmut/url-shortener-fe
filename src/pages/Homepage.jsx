import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';

import {
  SHOW_URL_MODAL,
  SHOW_LOG_IN_MODAL,
  SHOW_SIGN_UP_MODAL,
  SHOW_FORGOT_PASSWORD_MODAL,
} from 'action-types';
import Footer from 'components/Footer';
import ForgotPassword from 'components/ForgotPassword';
import LoginModal from 'components/LoginModal';
import ModalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import SignUpDesktop from 'components/SignUpModal';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const {
    UrlModal, LogInModal, SignupModal, ForgotPasswordModal,
  } = useSelector((state) => state.showModal);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { shortenedUrl, qrCode } = useSelector((state) => state.url);
  const dispatch = useDispatch();
  if (isAuthenticated) {
    return <Navigate to="/user-home" />;
  }
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar home />
      <div className="ml-[1.25rem] mt-[136px] mb-[23.5rem] md:mt-[152px] md:mb-[276px]">
        <UrlInputBoxAndTitle loggedIn={false} />
        <LoginModal
          title="Login Modal"
          onClose={() => dispatch({
            type: SHOW_LOG_IN_MODAL,
            payload: false,
          })}
          show={LogInModal}
        />
        <SignUpDesktop
          title="Signup Modal"
          onClose={() => dispatch({
            type: SHOW_SIGN_UP_MODAL,
            payload: false,
          })}
          show={SignupModal}
        />
        <ForgotPassword
          title="Forgot password"
          onClose={() => dispatch({
            type: SHOW_FORGOT_PASSWORD_MODAL,
            payload: false,
          })}
          show={ForgotPasswordModal}
        />
      </div>
      <ModalUrl
        title="My Modal"
        onClose={() => dispatch({
          type: SHOW_URL_MODAL,
          payload: false,
        })}
        show={UrlModal}
        shortenedUrl={shortenedUrl}
        slug={slug}
      />
      <Footer />
    </div>
  );
}
