import React from 'react';

import InputUrlField from './InputUrlField';
import ShortenUrlBtnMobile from './ShortenUrlBtnMobile';

export default function InputUrl() {
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
      <InputUrlField />
      <ShortenUrlBtnMobile />
    </div>
  );
}
