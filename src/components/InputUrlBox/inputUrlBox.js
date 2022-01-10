import React from 'react';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';
import ShortenUrlBtn from './shortenUrlBtn';
import InputLongUrl from './inputLongUrl';

export default function InputUrl() {
  return (
    <div className="w-[46.25rem] h-[6.25rem] rounded-md border shadow-lg border-titanium-white relative">
      <InputLongUrl />
      <ReactLogo className="absolute top-[3.188rem] left-[18.25rem]" />
      <div>
        <ShortenUrlBtn />
      </div>
    </div>
  );
}
