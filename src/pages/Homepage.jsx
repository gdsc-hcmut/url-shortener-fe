import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from 'components/Footer';
import LoginModal from 'components/LoginModal';
import NavBar from 'components/Navbar';
import Url from 'components/Url';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const dispatch = useDispatch();
  const { visibility } = useSelector((state) => state.showModal);
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar />
      <div className="ml-[1.25rem] mt-[8.625rem] mb-[20.5rem] md:mt-[20.981vh] md:mb-[22.428vh]">
        <UrlInputBoxAndTitle />
        <LoginModal
          title="Login Modal"
          onClose={() => dispatch({
            type: 'SHOW_MODAL',
            payload: false,
          })}
          show={visibility}
        />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
