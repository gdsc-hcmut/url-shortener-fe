import React from 'react';

import FooterCerti from './FooterCerti';
import FooterInfo from './FooterInfo';

export default function Footer() {
  return (
    <footer className="shadow-lg max-w-full h-fit w-full flex justify-center">
      <div className="flex flex-col content-center w-full">
        <FooterInfo />
        <FooterCerti />
      </div>
    </footer>
  );
}
