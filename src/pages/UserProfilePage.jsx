import React, { useState, useEffect } from 'react';

import Footer from 'components/Footer';
import NavbarModal from 'components/Modals/NavbarModal';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import UserProfile from 'components/UserProfile';

export default function UserProfilePage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
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
      className="flex flex-col justify-center md:items-center bg-white md:bg-gdscGrey-100"
      onClick={hideModal}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <NavbarLogin showModal={showNavbarModal} myUrl={false} />
      <NavbarModal show={show} />
      <div className="md:self-start md:w-full mt-5 mb-8 md:mt-[-98px] md:mb-[300px]">
        <UserProfile />
      </div>
      {isMobile ? <Footer /> : <div> </div>}
    </div>
  );
}
