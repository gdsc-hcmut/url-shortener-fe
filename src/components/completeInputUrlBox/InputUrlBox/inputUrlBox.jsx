import React from 'react';

<<<<<<< HEAD:src/components/completeInputUrlBox/InputUrlBox/index.jsx
import InputUrlField from './InputUrlField';
import ShortenUrlBtnMobile from './ShortenUrlBtnMobile';
=======
import InputUrlField from './inputUrlField';
import ShortenUrlBtnMobile from './shortenUrlBtnMobile';
>>>>>>> [f] 456C - Create Input Url box for Homepage's UI:src/components/completeInputUrlBox/InputUrlBox/inputUrlBox.jsx

export default function InputUrl() {
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
      <InputUrlField />
      <ShortenUrlBtnMobile />
    </div>
  );
}
