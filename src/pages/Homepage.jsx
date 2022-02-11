import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SHOW_URL_MODAL,
  SHOW_LOG_IN_MODAL,
  SHOW_SIGN_UP_MODAL,
} from 'action-types';
import Footer from 'components/Footer';
import LoginModal from 'components/LoginModal';
import ModalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import SignUpDesktop from 'components/SignUpModal';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const { UrlModal, LogInModal, SignupModal } = useSelector(
    (state) => state.showModal,
  );
  const { shortenedUrl } = useSelector((state) => state.url);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar isModalPage={false} />
      <div className="ml-[1.25rem] mt-[216px] mb-[23.5rem] md:mt-[260px] md:mb-[276px]">
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
          title="My Modal"
          onClose={() => dispatch({
            type: SHOW_SIGN_UP_MODAL,
            payload: false,
          })}
          show={SignupModal}
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
      />
      <Footer />
    </div>
  );
}
