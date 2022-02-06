import React, { useEffect, useState } from 'react';

import Footer from 'components/Footer';
import NavbarModal from 'components/Modals/NavbarModal';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function HomepageLogin() {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const showNavbarModal = (e) => {
    e.stopPropagation();
    showModal();
  };
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      hideModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  return (
    <div
      aria-hidden="true"
      className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain"
      onClick={hideModal}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <NavbarLogin showModal={showNavbarModal} />
      <NavbarModal show={show} />
      <div className="ml-[1.25rem] mt-[5px] mb-[288px] md:mt-[22px] md:mb-[276px]">
        <UrlInputBoxAndTitle loggedIn />
      </div>
      <Footer />
    </div>
  );
}
