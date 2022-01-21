import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import shortenUrl from 'actions/url';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

export default function InputUrlField({ onClick }) {
  const [longUrl, setLongUrl] = useState('');
  const dispatch = useDispatch();

  const handleLongUrl = (e) => setLongUrl(e.target.value);
  const handleClick = () => {
    dispatch(shortenUrl(longUrl));
  };
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 rounded-[8px]">
      <div className="relative hidden md:block bg-white md:w-[740px] md:h-[100px] rounded-[8px] border shadow-lg border-gdscGrey-200">
        <div className="w-[260px] h-12 absolute left-8 top-6 flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Your URL</strong>
          </p>
          <input
            value={longUrl}
            onChange={handleLongUrl}
            className="text-base font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none "
            placeholder="Input the URL you want to shorten"
          />
        </div>
        <ReactLogo className="absolute top-12 left-[292px]" />
        <div>
          <button
            type="button"
            className="absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 "
            onClick={function showModal() {
              handleClick();
              onClick();
            }}
          >
            Shorten
          </button>
        </div>
      </div>
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[72px] flex items-center pl-6 space-x-5 border shadow-lg border-gdscGrey-200">
        <ReactLogo />
        <input
          value={longUrl}
          onChange={handleLongUrl}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[32px]"
          placeholder="Input the URL you want to shorten"
        />
      </div>
      <button
        type="button"
        className="text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover"
        onClick={function showModal() {
          handleClick();
          onClick();
        }}
      >
        Shorten
      </button>
    </div>
  );
}
InputUrlField.propTypes = {
  onClick: PropTypes.func.isRequired,
};
