import React from 'react';

import NavbarButton from './NavbarButton';
import NavbarHome from './NavbarHome';

export default function NavBar() {
  return (
    <nav className="shadow-lg max-w-full h-fit w-full flex px-[3vw] py-[1.5vw]">
      <div className="flex h-full w-full justify-between align-center">
        <NavbarHome />
        <NavbarButton />
      </div>
    </nav>
  );
}
