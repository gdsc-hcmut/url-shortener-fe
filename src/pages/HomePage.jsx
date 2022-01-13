import React from 'react';

import UrlInputBoxAndTitle from 'components/CompleteInputUrlBox/UrlInputBoxAndTitle';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/Navbar/Navbar';
import Url from 'components/Url';

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <NavBar />

      <div className="mt-[13.6vh] mb-[14.5vh]">
        <UrlInputBoxAndTitle />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
