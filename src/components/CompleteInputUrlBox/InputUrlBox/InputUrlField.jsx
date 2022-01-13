import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import shortenUrl from 'actions/url';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

export default function InputUrlField() {
  const [longUrl, setLongUrl] = useState('');
  const dispatch = useDispatch();

  const handleLongUrl = (e) => setLongUrl(e.target.value);
  const handleClick = () => dispatch(shortenUrl(longUrl));

  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
      <div className="relative hidden md:block md:w-[46.25rem] md:h-[6.25rem] rounded-md border shadow-lg border-titanium-white">
        <div className="w-[16.25rem] h-12 absolute left-[1.938rem] top-[1.563rem] flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Your URL</strong>
          </p>
          <input
            value={longUrl}
            onChange={handleLongUrl}
            className="text-[0.938rem] font-normal text-dim-gray h-5 w-[16.25rem]"
            placeholder="Input the URL you want to shorten"
          />
        </div>
        <ReactLogo className="absolute top-[3.188rem] left-[18.25rem]" />
        <div>
          <button
            type="button"
            className="absolute inset-y-5 right-[21px] hidden text-[0.938rem] text-white md:block w-[9.735rem] h-[3.75rem] bg-royal-blue rounded-lg hover:bg-shorten-btn-hover"
            onClick={handleClick}
          >
            Shorten
          </button>
        </div>
      </div>
      <div className="relative md:hidden w-[23.375rem] h-[4.375rem] flex items-center pl-[1.875rem] space-x-[21px] rounded-md border shadow-lg border-titanium-white">
        <ReactLogo />
        <input
          className="text-[0.938rem] font-normal text-dim-gray h-5 w-[16.25rem]"
          placeholder="Input the URL you want to shorten"
        />
        <div>
          <button
            type="button"
            className="absolute inset-y-5 right-[21px] hidden text-[0.938rem] text-white md:block w-[9.735rem] h-[3.75rem] bg-royal-blue rounded hover:bg-shorten-btn-hover"
          >
            Shorten
          </button>
        </div>
      </div>
      <button
        type="button"
        className="text-[0.938rem] text-white md:hidden w-[9.735rem] h-[3.75rem] bg-royal-blue rounded hover:bg-shorten-btn-hover"
      >
        Shorten
      </button>
    </div>
  );
}
