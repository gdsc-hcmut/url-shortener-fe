import React from 'react';

import NavBarHome from './navbarhome';
import NavBarLink from './navbarlink';

export default function NavBar() {
  return (
    <nav className="shadow-lg max-w-full h-fit w-full flex px-[60px] py-[30px]">
      <div className="flex h-full w-full justify-between">
        <NavBarHome />
        <NavBarLink />
      </div>
    </nav>
  );
}
