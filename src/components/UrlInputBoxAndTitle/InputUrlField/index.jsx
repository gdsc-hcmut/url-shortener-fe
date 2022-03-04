import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { SHOW_URL_MODAL } from 'action-types';
import urlAction from 'actions/url';
import loadingIcon from 'assets/icons/loading.svg';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

export default function InputUrlField() {
  const [longUrl, setLongUrl] = useState('');
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const store = useStore();
  const handleLongUrl = (e) => setLongUrl(e.target.value);
  const handleClick = async (e) => {
    e.preventDefault();

    if (longUrl) {
      setLoading(true);
      await dispatch(urlAction.shortenUrl(longUrl));
      const reduxState = store.getState();
      if (reduxState.url.error.msg === 'Bad Request') {
        setLoading(reduxState.url.loading);
        setAlert(true);
        setTimeout(() => setAlert(false), 3000);
      } else {
        dispatch({
          type: SHOW_URL_MODAL,
          payload: true,
        });
        setLoading(reduxState.url.loading);
      }
    }
  };
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 rounded-[8px]">
      <form
        className="relative hidden md:block bg-white md:w-[740px] md:h-[100px] rounded-[8px] border shadow-lg border-gdscGrey-200"
        onSubmit={handleClick}
      >
        <div className="w-[260px] h-12 absolute left-8 top-6 flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Your URL</strong>
          </p>
          <div>
            <input
              value={longUrl}
              onChange={handleLongUrl}
              className="text-base font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none "
              placeholder="Input the URL you want to shorten"
            />
            {alert && <p className="text-gdscRed-300">Invalid Url!</p>}
          </div>
        </div>
        <ReactLogo className="absolute top-12 left-[292px]" />
        {!loading ? (
          <button
            type="submit"
            className={`absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 ${
              !longUrl && 'cursor-not-allowed'
            }`}
          >
            Shorten
          </button>
        ) : (
          <button
            type="button"
            className="absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300"
            disabled
          >
            <img
              src={loadingIcon}
              className="inline mr-3 w-6 h-6 animate-spin"
              alt="Loading indicator"
            />
          </button>
        )}
      </form>
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[72px] flex items-center pl-6 space-x-5 border shadow-lg border-gdscGrey-200">
        <ReactLogo />
        <input
          value={longUrl}
          onChange={handleLongUrl}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[32px]"
          placeholder="Input the URL you want to shorten"
        />
      </div>
      {alert && <p className="text-gdscRed-300 md:hidden">Invalid Url!</p>}
      {!loading ? (
        <button
          type="button"
          className={`text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover ${
            !longUrl && 'cursor-not-allowed'
          }`}
          onClick={handleClick}
        >
          Shorten
        </button>
      ) : (
        <button
          type="button"
          className="text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover"
          disabled
        >
          <img
            src={loadingIcon}
            className="inline mr-3 w-6 h-6 animate-spin"
            alt="Loading indicator"
          />
        </button>
      )}
    </div>
  );
}
