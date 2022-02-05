import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHOW_URL_MODAL, SHOW_SIGN_UP_MODAL } from 'action-types';
import Footer from 'components/Footer';
import MordalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import SignUpDesktop from 'components/SignUpModal';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const { UrlModal, SignupModal } = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar />
      <div className="ml-[1.25rem] mt-[260px] mb-[23.5rem] md:mt-[216px] md:mb-[276px]">
        <UrlInputBoxAndTitle />
        <SignUpDesktop
          title="My Modal"
          onClose={() => dispatch({
            type: SHOW_SIGN_UP_MODAL,
            payload: false,
          })}
          show={SignupModal}
        />
      </div>
      <MordalUrl
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
