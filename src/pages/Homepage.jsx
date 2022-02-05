import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHOW_URL_MODAL, SHOW_LOG_IN_MODAL } from 'action-types';
import Footer from 'components/Footer';
import LoginModal from 'components/LoginModal';
import ModalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const { UrlModal, LogInModal } = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar />
      <div className="ml-[1.25rem] mt-[8.625rem] mb-[20.5rem] md:mt-[20.981vh] md:mb-[22.428vh]">
        <UrlInputBoxAndTitle />
        <LoginModal
          title="Login Modal"
          onClose={() => dispatch({
            type: SHOW_LOG_IN_MODAL,
            payload: false,
          })}
          show={LogInModal}
        />
      </div>
      <ModalUrl
        title="My Modal"
        onClose={() => dispatch({
          type: SHOW_URL_MODAL,
          payload: false,
        })}
        show={UrlModal}
      />
      <Footer />
    </div>
  );
}
