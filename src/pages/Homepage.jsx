import React, { useState } from 'react';

import Footer from 'components/Footer';
import MordalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function Homepage() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain">
      <NavBar />
      <div className="ml-[1.25rem] mt-[260px] mb-[23.5rem] md:mt-[216px] md:mb-[276px]">
        <UrlInputBoxAndTitle onClick={() => setShow(true)} />
      </div>
      <MordalUrl title="My Modal" onClose={() => setShow(false)} show={show} />
      <Footer />
    </div>
  );
}
