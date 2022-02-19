import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SHOW_URL_MODAL } from 'action-types';
import urlAction from 'actions/url';
import EditIcon from 'assets/icons/edit.svg';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

export default function InputUrlLogIn() {
  const [longUrl, setLongUrl] = useState('');
  const [slug, setSlug] = useState('');
  const dispatch = useDispatch();

  const handleLongUrl = (e) => setLongUrl(e.target.value);
  const handleSlug = (e) => setSlug(e.target.value);
  const handleClick = () => {
    dispatch(urlAction.shortenUrlWithSlug(longUrl, slug));
    dispatch({
      type: SHOW_URL_MODAL,
      payload: true,
    });
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 rounded-[8px]">
      <div className="relative hidden md:block bg-white md:w-[796px] md:h-[104px] rounded-[8px] border shadow-lg border-gdscGrey-200">
        <div className="w-[260px] h-12 absolute left-8 top-7 flex-col space-y-2">
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
        <ReactLogo className="absolute top-[52px] left-[292px]" />
        <div className="w-px h-16 bg-gdscGrey-200 absolute left-[344px] top-5" />
        <div className="w-[172px] h-12 absolute left-[372px] top-7 flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Slug</strong>
          </p>
          <input
            value={slug}
            onChange={handleSlug}
            className="text-base font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none "
            placeholder="Input your custom slug"
          />
        </div>
        <img
          className="w-6 h-6 absolute top-12 left-[562px]"
          src={EditIcon}
          alt="Edit icon"
        />
        <div>
          <button
            type="button"
            className="absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[64px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 "
            onClick={handleClick}
          >
            Shorten
          </button>
        </div>
      </div>
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[70px] flex items-center pl-5 space-x-5 rounded-md border shadow-lg border-gdscGrey-200">
        <ReactLogo />
        <input
          value={longUrl}
          onChange={handleLongUrl}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[30px]"
          placeholder="Input the URL you want to shorten"
        />
      </div>
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[70px] flex items-center pl-5 space-x-5 rounded-md border shadow-lg border-gdscGrey-200">
        <img className="w-6 h-6" src={EditIcon} alt="Edit icon" />
        <input
          value={slug}
          onChange={handleSlug}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[30px]"
          placeholder="Input your custom slug"
        />
      </div>
      <button
        type="button"
        className="text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover"
        onClick={handleClick}
      >
        Shorten
      </button>
    </div>
  );
}
