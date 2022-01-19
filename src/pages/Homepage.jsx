import React from 'react';

import Footer from 'components/Footer';
import NavBar from 'components/Navbar';
import Url from 'components/Url';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar />
      <div className="ml-[1.25rem] mt-[8.625rem] mb-[20.5rem] md:mt-[20.981vh] md:mb-[22.428vh]">
        <UrlInputBoxAndTitle />
      </div>
      <Url />
      <Footer />
    </div>
  );
}