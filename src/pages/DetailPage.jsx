import React, { useEffect, useState } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.shiftKey && e.key === 'Enter') {
        handleToggleMenu();
      }
    });
  });
  return (
    <div className="max-h-[100vh] detail-page flex flex-col">
      <button
        type="button"
        className="absolute md:hidden right-5 top-5 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <Navbar />
      <div className="flex overflow-y-hidden overflow-x-scroll h-full">
        <SideMenu toggle={toggleMenu} page="detail" />
        <div className="bg-gdscGrey-100 w-full min-h-screen flex-1 px-[60px] pt-10 pb-[156px] text-2xl font-bold flex">
          <div className="w-[392px] h-full hidden lg:block">
            <MyUrl />
          </div>
          <div className="w-full h-full ml-4">Something</div>
        </div>
      </div>
    </div>
  );
}
