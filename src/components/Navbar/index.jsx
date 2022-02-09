import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import NavbarButton from './NavbarButton';
import NavbarHome from './NavbarHome';

export default function Navbar({ isModalPage }) {
  const [width, setWidth] = useState(window.innerWidth);

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
    <nav className="top-0 fixed z-10 shadow-lg max-w-full h-fit w-full flex px-[20px] py-[24px] md:px-[60px] md:py-[28px] bg-white">
      <div className="flex h-full w-full justify-between align-center">
        <NavbarHome />
        {!isModalPage ? (
          <NavbarButton isMobileHomepage={isMobile} />
        ) : (
          <div> </div>
        )}
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  isModalPage: PropTypes.bool.isRequired,
};
