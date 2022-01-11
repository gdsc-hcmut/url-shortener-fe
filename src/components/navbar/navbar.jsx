import React from 'react';

import NavBarButton from './navbarbutton';
import NavBarHome from './navbarhome';

export default function NavBar() {
  return (
    <nav className="shadow-lg max-w-full h-fit w-full flex px-[3vw] py-[1.5vw]">
      <div className="flex h-full w-full justify-between align-center">
        <NavBarHome />
        <NavBarButton />
      </div>
    </nav>
  );
}
