import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';
import useWindowSize from 'utils/hooks/ScreenSizeHook';

export default function MyUrlPage() {
  const [screenWidth] = useWindowSize();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  useLayoutEffect(() => {
    if (screenWidth >= 1024) {
      navigate('/detail/0');
    }
    return () => {};
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
      <div className="flex overflow-y-scroll overflow-x-scroll md:overflow-hidden h-full">
        <SideMenu toggle={toggleMenu} page="my-url" />
        <div className="bg-gdscGrey-100 h-full md:h-6 md:min-h-screen flex-1 md:pl-[60px] md:pt-10 md:pb-[156px] pl-5 text-2xl font-bold flex">
          <MyUrl />
        </div>
      </div>
    </div>
  );
}
