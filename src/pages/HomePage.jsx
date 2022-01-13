import React from 'react';

import UrlInputBoxAndTitle from 'components/CompleteInputUrlBox/UrlInputBoxAndTitle';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/Navbar/Navbar';
import Url from 'components/Url';

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center md:items-center">
      <NavBar />

      <div className="ml-[1.25rem] mt-[8.625rem] md:mt-[20.981vh] md:mb-[54.26vh]">
        <UrlInputBoxAndTitle />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
