import React from 'react';

import Footer from 'components/Footer';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import Url from 'components/Url';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function HomepageLogin() {
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavbarLogin />
      <div className="ml-[1.25rem] mt-[136px] mb-[288px] md:mt-[152px] md:mb-[276px]">
        <UrlInputBoxAndTitle loggedIn />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
