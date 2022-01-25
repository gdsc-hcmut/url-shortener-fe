import React, { useState } from 'react';

import MenuIcon from 'assets/icons/menu_icon.svg';
import NavBar from 'components/Navbar';
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
        className="absolute md:hidden right-0 top-10 z-50"
        onClick={handleToggleMenu}
      >
        <img src={MenuIcon} alt="menu_icon" />
      </button>
      <NavBar />
      <div>
        <div className="relative min-h-screen flex">
          <SideMenu toggle={toggleMenu} />
          <div className="p-10 text-2xl font-bold ">
            Use Shift + Enter to test the sidemenu on Mobile
          </div>
        </div>
      </div>
    </div>
  );
}
