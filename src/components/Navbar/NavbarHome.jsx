import React from 'react';

import LogoMobile from 'assets/image/logo-mobile.svg';
import Logo from 'assets/image/logo.svg';

export default function NavBarHome() {
  return (
    <div className="flex items-center">
      <img
        className="hidden md:inline w-[401.05px] h-[50px] mr-[30px]"
        src={Logo}
        alt="website logo"
      />
      <img
        className="md:hidden w-[48.26px] h-[23.41px]"
        src={LogoMobile}
        alt="website logo"
      />
      <p className="md:hidden text-[15px] font-[700] ml-[6px]">
        GDSC - HCMUT
      </p>
    </div>
  );
}
