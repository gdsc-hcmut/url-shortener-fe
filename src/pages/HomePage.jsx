import React from 'react';

import UrlInputBoxAndTitle from 'components/CompleteInputUrlBox/UrlInputBoxAndTitle';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';
import Url from 'components/Url';

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <NavBar />
      <h1 className="text-3xl text-blue-600 underline">My URL</h1>
      <UrlInputBoxAndTitle />
      <Url />
      <Footer />
    </div>
  );
}
