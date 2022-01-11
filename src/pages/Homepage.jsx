import React from 'react';

import Footer from 'components/Footer';
import HomepageText from 'components/HomepageText';
import InputUrlBox from 'components/InputUrlBox';
import NavBar from 'components/Navbar';
import Url from 'components/Url';

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <NavBar />
      <h1 className="text-3xl text-blue-600 underline">My URL</h1>
      <div className="flex flex-col space-y-[39px]">
        <HomepageText />
        <InputUrlBox />
      </div>
      <Url />
      <Footer />
    </div>
  );
}
