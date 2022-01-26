import React from 'react';

import FooterCerti from './FooterCerti';
import FooterInfo from './FooterInfo';
import FooterInfoMobile from './FooterInfoMobile';

export default function Footer() {
  return (
    <footer className="border-t border-gdscGrey-100 shadow-lg max-w-full h-fit w-full flex justify-center">
      <div className="flex flex-col content-center w-full">
        <FooterInfo />
        <FooterInfoMobile />
        <FooterCerti />
      </div>
    </footer>
  );
}
