import React from 'react';
import { Link } from 'react-router-dom';

import FessiorLogoMobile from 'assets/icons/logo/Fessior-07.png';
import FessiorLogo from 'assets/icons/logo/Fessior-15.png';
import GDSCLogo from 'assets/icons/logo/GDSC_Logo.png';
import GDSCLogoMobile from 'assets/image/logo-mobile.svg';

export default function NavBarHome() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img
          className="hidden md:inline h-[50px] mr-[30px]"
          src={FessiorLogo}
          alt="website logo"
        />
        <img
          className="hidden md:inline h-[50px] mr-[30px]"
          src={GDSCLogo}
          alt="website logo"
        />
      </Link>
      <Link to="/" className="flex items-center">
        <img
          className="md:hidden w-[48.26px] mr-[12px]"
          src={FessiorLogoMobile}
          alt="website logo"
        />
        <img
          className="md:hidden w-[48.26px] h-[23.41px]"
          src={GDSCLogoMobile}
          alt="website logo"
        />
      </Link>
    </div>
  );
}
