/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { closeInfoBar } from 'actions/notification';
import defaultAvatar from 'assets/icons/account_circle_blue.svg';
import CloseIcon from 'assets/icons/close_info_bar.svg';
import NavbarModal from 'components/Modals/NavbarModal';

import NavbarButton from './NavbarButton';
import NavbarHome from './NavbarHome';

export default function Navbar({ home }) {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { showingInfoBar, email } = useSelector((state) => state.notification);

  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const getName = user.name.split(' ');
  const userName = getName[getName.length - 1];
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
    <>
      {showingInfoBar && (
        <div className="hidden relative md:flex justify-center items-center px-5 h-16 bg-gdscBlue-50">
          <p className="text-gdscGrey-900">
            Please confirm your email address by clicking the &ldquo;verify
            email&rdquo; button in the email we sent to
            <span className="font-black"> {email} </span>
          </p>
          <button
            type="button"
            className="absolute right-6"
            onClick={() => dispatch(closeInfoBar())}
          >
            <img className="w-5 h-5" src={CloseIcon} alt="X" />
          </button>
        </div>
      )}
      <nav className="shadow-md max-w-full h-fit w-full flex px-[20px] py-[20px] md:px-[60px] md:py-[30px] bg-white z-40">
        <div className="flex h-full w-full justify-between align-center">
          <NavbarHome />
          <div className="flex space-x-8">
            {home && isAuthenticated && !isMobile ? (
              <div
                aria-hidden
                className="bg-gdscBlue-300 ease-out duration-300 hover:bg-my-url-button-hover
              text-white font-normal rounded w-[100px] h-[36px] md:w-[144px] md:h-[52px]
                content-center text-base md:my-0 flex justify-center items-center cursor-pointer"
                onClick={() => navigate('/urls')}
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
                <p className="mr-10">{user && userName}</p>
                <img
                  className="h-[44px] w-[44px] mr-1"
                  src={defaultAvatar}
                  alt="avatar icon"
                />
              </button>
            )}
          </div>
          <NavbarModal show={show} onClose={hideModal} />
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  home: PropTypes.bool.isRequired,
};
