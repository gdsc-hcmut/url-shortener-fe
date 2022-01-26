import PropTypes from 'prop-types';
import React from 'react';

import NavbarButton from './NavbarButton';
import NavbarHome from './NavbarHome';

export default function Navbar({ isModalPage }) {
  return (
    <nav className="shadow-lg max-w-full h-fit w-full flex px-[20px] py-[20px] md:px-[60px] md:py-[30px] bg-white">
      <div className="flex h-full w-full justify-between align-center">
        <NavbarHome />
        {!isModalPage ? <NavbarButton /> : <div> </div>}
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  isModalPage: PropTypes.bool.isRequired,
};
