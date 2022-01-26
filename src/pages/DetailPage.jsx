import React, { useState } from 'react';

import MenuIcon from 'assets/icons/menu_icon.svg';
import SideMenu from 'components/SideMenu';
import useWindowSize from 'components/SideMenu/ScreenSizeHook';

export default function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, height, screen] = useWindowSize();

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
      <div>
        <div className="relative min-h-screen flex">
          <SideMenu
            toggle={toggleMenu}
            screen={screen}
            screenWidth={width}
            screenHeight={height}
            page="detail"
          />
          <div className="bg-gdscGrey-100 flex-1 p-10 text-2xl font-bold ">
            Use Shift + Enter to test the sidemenu on Mobile
          </div>
        </div>
      </div>
    </div>
  );
}
