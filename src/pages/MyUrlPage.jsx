import React, { useState } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function MyUrlPage() {
  const [toggleMenu, setToggleMenu] = useState(false);
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
      <Navbar home={false} />
      <div
        id="MyUrlPage"
        className="flex overflow-y-scroll overflow-x-scroll md:overflow-hidden h-full"
      >
        <SideMenu toggle={toggleMenu} page="urls" />
        <div className="bg-gdscGrey-100 h-full md:h-full flex-1 pl-5 md:pl-[60px] md:pt-10 md:pb-[156px] text-2xl font-bold flex">
          <MyUrl />
        </div>
      </div>
    </div>
  );
}
