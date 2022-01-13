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
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 rounded-[0.5rem]">
      <div className="relative hidden md:block bg-white md:w-[46.25rem] md:h-[6.25rem] rounded-[0.5rem] border shadow-lg border-gdscGrey-200">
        <div className="w-[16.25rem] h-12 absolute left-[1.938rem] top-[1.563rem] flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Your URL</strong>
          </p>
          <input
            value={longUrl}
            onChange={handleLongUrl}
            className="text-[0.938rem] font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none "
            placeholder="Input the URL you want to shorten"
          />
        </div>
        <ReactLogo className="absolute top-[3.188rem] left-[18.25rem]" />
        <div>
          <button
            type="button"
            className="absolute inset-y-5 right-[21px] hidden text-[0.938rem] text-white md:block w-[9.735rem] h-[3.75rem] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 "
            onClick={handleClick}
          >
            Shorten
          </button>
        </div>
      </div>
      <div className="relative md:hidden bg-white rounded-[0.5rem] mr-[1.875rem] h-[4.375rem] flex items-center pl-[1.875rem] space-x-[21px] rounded-md border shadow-lg border-gdscGrey-200">
        <ReactLogo />
        <input
          className="text-[0.938rem] font-normal text-gdscGrey-700 h-5 w-[100%] bg-white"
          placeholder="Input the URL you want to shorten"
        />
        <div>
          <button
            type="button"
            className="absolute inset-y-5 right-[21px] hidden text-[0.938rem] text-white md:block w-[9.735rem] h-[3.75rem] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover ease-out duration-300 "
          >
            Shorten
          </button>
        </div>
      </div>
      <button
        type="button"
        className="text-[0.938rem] text-white md:hidden w-[9.735rem] h-[3.75rem] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover"
      >
        Shorten
      </button>
    </div>
  );
}
