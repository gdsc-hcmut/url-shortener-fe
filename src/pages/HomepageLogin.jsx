import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHOW_URL_MODAL } from 'action-types';
import Footer from 'components/Footer';
import ModalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const { UrlModal } = useSelector((state) => state.showModal);
  const { shortenedUrl } = useSelector((state) => state.url);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar home loggedIn />
      <div className="ml-[1.25rem] mt-[216px] mb-[23.5rem] md:mt-[260px] md:mb-[276px]">
        <UrlInputBoxAndTitle loggedIn />
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
