import React, { useEffect, useState } from 'react';

// import MenuIcon from 'assets/icons/menu_icon.svg';
import NavBar from 'components/Navbar';
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
    <div className="detail-page flex flex-col justify-center">
      <NavBar />
      <div>
        <div className="relative min-h-screen flex">
          <SideMenu toggle={toggleMenu} />
          <div className="p-10 text-2xl font-bold ">
            Use Shift + Enter to test the sidemenu on Mobile
          </div>
          {/* <button
            type="button"
              className="absolute md:hidden right-0"
              onClick={handleToggleMenu}
            >
            <img
              src={MenuIcon}
              alt="menu_icon"
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
