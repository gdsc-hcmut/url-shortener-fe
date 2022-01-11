import React from 'react';

import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

import InputLongUrl from './inputLongUrl';
import ShortenUrlBtn from './shortenUrlBtn';

export default function InputUrlField() {
  return (
    <div>
      <div className="relative hidden md:block md:w-[46.25rem] md:h-[6.25rem] rounded-md border shadow-lg border-titanium-white">
        <InputLongUrl />
        <ReactLogo className="absolute top-[3.188rem] left-[18.25rem]" />
        <div>
          <ShortenUrlBtn />
        </div>
      </div>
      <div className="relative md:hidden w-[23.375rem] h-[4.375rem] flex items-center pl-[1.875rem] space-x-[21px] rounded-md border shadow-lg border-titanium-white">
        <ReactLogo />
        <input className="text-[0.938rem] font-normal text-dim-gray h-5 w-[16.25rem]" placeholder="Input the URL you want to shorten" />
        <div>
          <ShortenUrlBtn />
        </div>
      </div>
    </div>
  );
}
