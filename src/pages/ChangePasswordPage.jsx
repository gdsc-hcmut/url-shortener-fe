import React, { useEffect, useState } from 'react';

import ChangePassword from 'components/ChangePassword';
import Footer from 'components/Footer';
import NavbarLogin from 'components/Navbar/NavbarLogin';

export default function ChangePasswordPage() {
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
    <div className="flex flex-col justify-center items-center md:items-center bg-white md:bg-gdscGrey-100">
      <NavbarLogin />
      <div className="mt-10 mb-[120px] md:mt-16 md:self-start md:mb-[22.428vh] md:w-full">
        <ChangePassword />
      </div>
      {isMobile ? <Footer /> : <div> </div>}
    </div>
  );
}
