import React from 'react';

import Footer from 'components/Footer';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import Url from 'components/Url';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function HomepageLogin() {
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavbarLogin />
      <div className="ml-[1.25rem] mt-[8.625rem] mb-[20.5rem] md:mt-[20.981vh] md:mb-[22.428vh]">
        <UrlInputBoxAndTitle loggedIn />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
