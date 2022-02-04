import React, { useState, useEffect } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import ChangePassword from 'components/ChangePassword';
import Footer from 'components/Footer';
import NavbarModal from 'components/Modals/NavbarModal';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import SideMenu from 'components/SideMenu';

export default function DetailPage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
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
      className="max-h-[100vh] detail-page flex flex-col"
      onClick={hideModal}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <button
        type="button"
        className="absolute md:hidden right-5 top-3 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <NavbarLogin showModal={showNavbarModal} myUrl={false} />
      <NavbarModal show={show} />
      <div className="flex h-full mt-[-130px]">
        <SideMenu toggle={toggleMenu} page="change-pass" />
        <div className="bg-white md:bg-gdscGrey-100 mt-[24px] md:mt-0 min-h-screen md:overflow-y-scroll flex-1 pb-[120px] md:pb-[156px]">
          <ChangePassword />
        </div>
      </div>
      {isMobile ? <Footer /> : <div> </div>}
    </div>
  );
}
