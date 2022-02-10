import PropTypes from 'prop-types';
import React from 'react';

import MenuIcon from 'assets/icons/menu.svg';

import NavbarHome from './NavbarHome';

export default function NavbarLogin({ myUrl, showModal }) {
  return (
    <nav className="shadow-lg max-w-full h-fit w-full flex px-[20px] py-[20px] md:px-[60px] md:py-[30px] bg-white">
      <div className="flex h-full w-full align-center justify-between">
        <NavbarHome />
        <div className="hidden md:flex space-x-8">
          {myUrl ? (
            <button
              type="button"
              className="bg-gdscBlue-300 ease-out duration-300 hover:bg-my-url-button-hover
          text-white font-normal rounded w-[100px] h-[36px] md:w-[144px] md:h-[52px]
            content-center text-base md:my-0"
            >
              <p>My URL</p>
            </button>
          ) : (
            <div> </div>
          )}
          <button
            type="button"
            onClick={showModal}
            className="hidden bg-gdscBlue-200 ease-out duration-300 hover:bg-login-btn-hover bg-opacity-10
         text-gdscBlue-300 font-normal hover:bg-opacity-10 rounded md:flex justify-end items-center
           w-[100px] h-[36px] md:w-[184px] md:h-[52px] content-center text-base  md:my-0 ml-[30px]"
          >
            <p className="mr-10">John</p>
            <div className="h-[44px] w-[44px] bg-gdscBlue-300 rounded-[9999px] mr-1">
              {' '}
            </div>
          </button>
          <img src={MenuIcon} alt="Menu Icon" className="md:hidden" />
        </div>
      </div>
    </nav>
  );
}
NavbarLogin.propTypes = {
  myUrl: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};
