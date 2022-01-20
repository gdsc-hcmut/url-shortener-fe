import React from 'react';

import NavbarButton from './NavbarButton';
import NavbarHome from './NavbarHome';

export default function Navbar() {
  return (
    <nav className="top-0 fixed z-10 shadow-lg max-w-full h-fit w-full flex px-[20px] py-[24px] md:px-[60px] md:py-[28px] bg-white">
      <div className="flex h-full w-full justify-between align-center">
        <NavbarHome />
        <NavbarButton />
      </div>
    </nav>
  );
}
