import React, { useState, useEffect } from 'react';

import Footer from 'components/Footer';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import UserProfile from 'components/UserProfile';

export default function UserProfilePage() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return (
    <div className="flex flex-col justify-center md:items-center bg-white md:bg-gdscGrey-100">
      <NavbarLogin />
      <div className="md:self-start md:w-full mt-5 mb-8 md:mt-[20.981vh] md:mb-[22.428vh]">
        <UserProfile />
      </div>
      {isMobile ? <Footer /> : <div> </div>}
    </div>
  );
}
