import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import MenuIcon from 'assets/icons/menu.svg';
import NavbarModal from 'components/Modals/NavbarModal';

import NavbarButton from './NavbarButton';
import NavbarHome from './NavbarHome';

export default function Navbar({ home }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleShow = () => setShow(!show);
  const hideModal = () => setShow(false);

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
  return (
    <nav className="shadow-md max-w-full h-fit w-full flex px-[20px] py-[20px] md:px-[60px] md:py-[30px] bg-white z-40">
      <div className="flex h-full w-full justify-between align-center">
        <NavbarHome />
        <div className="flex space-x-8">
          {home && isAuthenticated ? (
            <div
              aria-hidden
              className="bg-gdscBlue-300 ease-out duration-300 hover:bg-my-url-button-hover
              text-white font-normal rounded w-[100px] h-[36px] md:w-[144px] md:h-[52px]
                content-center text-base md:my-0 flex justify-center items-center cursor-pointer"
              onClick={() => navigate('/my-url')}
            >
              My URL
            </div>
          ) : (
            <div> </div>
          )}
          {!isAuthenticated ? (
            <NavbarButton isMobileHomepage={isMobile} home={home} />
          ) : (
            <button
              onClick={handleShow}
              type="button"
              className="hidden bg-gdscBlue-200 ease-out duration-300 hover:bg-login-btn-hover bg-opacity-10
          text-gdscBlue-300 font-normal hover:bg-opacity-10 rounded md:flex justify-end items-center
            w-[100px] h-[36px] md:w-[184px] md:h-[52px] content-center text-base  md:my-0 ml-[30px]"
            >
              <p className="mr-10">John</p>
              <div className="h-[44px] w-[44px] bg-gdscBlue-300 rounded-[9999px] mr-1">
                {' '}
              </div>
            </button>
          )}
          {isAuthenticated ? (
            <img src={MenuIcon} alt="Menu Icon" className="md:hidden" />
          ) : (
            <div> </div>
          )}
        </div>
        <NavbarModal show={show} />
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  home: PropTypes.bool.isRequired,
};
