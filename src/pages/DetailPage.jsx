import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import Detail from 'components/Detail';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { slug } = useParams();

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
      <div className="flex overflow-hidden h-full">
        <SideMenu toggle={toggleMenu} page="detail" />
        <div className="bg-gdscGrey-100 md:min-h-screen flex-1 detail-md:pl-[60px] md:pt-10 md:pb-[156px] pl-5 text-2xl font-bold flex overflow-x-scroll">
          <div className="w-[392px] h-full hidden xl:block">
            <MyUrl slug={slug} />
          </div>
          <div className={`w-full h-full md:ml-4 ${!slug ? 'hidden' : ''}`}>
            <Detail slug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
