import React, { useState } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import SideMenu from 'components/SideMenu';

export default function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="relative detail-page flex flex-col justify-center">
      <button
        type="button"
        className="absolute md:hidden right-5 top-5 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <div>
        <div className="relative min-h-screen flex">
          <SideMenu toggle={toggleMenu} page="detail" />
          <div className="bg-gdscGrey-100 flex-1 p-10 text-2xl font-bold ">
            Use Shift + Enter to test the sidemenu on Mobile
          </div>
        </div>
      </div>
    </div>
  );
}
