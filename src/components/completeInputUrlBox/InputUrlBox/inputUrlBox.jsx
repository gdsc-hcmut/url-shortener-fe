import React from 'react';

import InputUrlField from './inputUrlField';
import ShortenUrlBtnMobile from './shortenUrlBtnMobile';

export default function InputUrl() {
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
      <InputUrlField />
      <ShortenUrlBtnMobile />
    </div>
  );
}
