import React from 'react';

import ChangePassword from 'components/ChangePassword';
import Footer from 'components/Footer';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import Url from 'components/Url';

export default function ChangePasswordPage() {
  return (
    <div className="flex flex-col justify-center items-center md:items-center bg-white md:bg-blue md:bg-contain">
      <NavbarLogin />
      <div className="mt-10 mb-[120px] md:mt-[20.981vh] md:mb-[22.428vh]">
        <ChangePassword />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
