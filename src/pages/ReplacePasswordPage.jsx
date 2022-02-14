import React, { useState } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import ChangePassword from 'components/ChangePassword';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function ReplacePasswordPage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div aria-hidden="true" className="max-h-[100vh] detail-page flex flex-col">
      <button
        type="button"
        className="absolute md:hidden right-5 top-3 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <Navbar home={false} loggedIn />
      <div className="flex overflow-y-scroll overflow-x-scroll md:overflow-hidden h-full">
        <SideMenu toggle={toggleMenu} page="change-pass" />
        <div className="bg-white md:bg-gdscGrey-100 mt-[48px] md:mt-0 h-full w-full md:h-6 md:min-h-screen flex-1 overflow-y-scroll">
          <div className="pb-[120px] md:pb-[156px]">
            <ChangePassword />
          </div>
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
