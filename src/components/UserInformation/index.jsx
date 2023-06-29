import PropTypes from 'prop-types';
import React, { useState } from 'react';

import AccountCircle from 'assets/icons/account_circle_white.svg';
import CloseIcon from 'assets/icons/close_icon_snackbar.svg';

import CreatedOn from './general/CreatedOn';
import ExpireTime from './general/ExpireTime';
import TodayClick from './general/TodayClick';
import TotalClick from './general/TotalClick';

export default function UserInformation({ getUrl, setGetUrl }) {
  const [urlList, setUrlList] = useState([
    {
      link: getUrl,
      shortLink: `${getUrl}.shortlink1.com`,
      id: `${getUrl}_shortlink1`,
    },
    {
      link: getUrl,
      shortLink: `${getUrl}.shortlink2.com`,
      id: `${getUrl}_shortlink2`,
    },
  ]);
  const [urlChoosing, setUrlChoosing] = useState({
    link: getUrl,
    shortLink: `${getUrl}.shortlink1.com`,
    id: `${getUrl}_shortlink1`,
  });

  return (
    <div className="relative w-[1510px] h-[1644px] ml-[28px] mt-[28px] p-[36px] bg-white">
      <button
        type="button"
        onClick={() => setGetUrl({})}
        className="absolute w-[40px] h-[40px] top-[20px] right-[20px] flex items-center justify-center bg-blue-200 rounded-[8px] cursor-pointer"
      >
        <img src={CloseIcon} className="w-[24px] h-[24px]" alt="close-icon" />
      </button>
      <div className="w-full h-[152px] flex items-center flex-row">
        <div className="w-[152px] h-[152px] flex items-center justify-center mr-[47px] flex-row bg-gdscGrey-700 opacity-80 rounded-[8px]">
          <img
            src={AccountCircle}
            className="w-[146px] h-[146px] fill-white opacity-80"
            alt="account_circle"
          />
        </div>
        <div className="h-full flex flex-row items-end text-[16px]">
          <div className="w-[240px] h-auto flex flex-col text-left font-normal mr-[48px]">
            <div className="text-black mb-[16px]">Name</div>
            <div className="w-full h-[60px] flex items-center px-[20px] bg-gdscGrey-300 border-0 rounded-[8px] text-gdscGrey-700 font-normal truncate">
              Nguyen Van A
            </div>
          </div>
          <div className="w-[340px] h-auto flex flex-col text-left font-normal mr-[48px]">
            <div className="text-black mb-[16px]">Email Address</div>
            <div className="w-full h-[60px] flex items-center px-[20px] bg-gdscGrey-300 border-0 rounded-[8px] text-gdscGrey-700 font-normal truncate">
              anguyenvan@gmail.com
            </div>
          </div>
          <div className="w-[180px] h-auto flex flex-col text-left font-normal mr-[48px]">
            <div className="text-black mb-[16px]">Birthday</div>
            <div className="w-full h-[60px] flex items-center px-[20px] bg-gdscGrey-300 border-0 rounded-[8px] text-gdscGrey-700 font-normal truncate">
              12/04/2016
            </div>
          </div>
          <div className="w-[340px] h-auto flex flex-col text-left font-normal">
            <div className="text-black mb-[16px]">Organization</div>
            <div className="w-full h-[60px] flex items-center px-[20px] bg-gdscGrey-300 border-0 rounded-[8px] text-gdscGrey-700 font-normal truncate">
              GDSC
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-center text-[32px] font-medium mt-[40px]">
        {urlChoosing.link}
      </div>
      <div className="flex flex-row mt-[20px]">
        <div className="w-[394px] h-[1302px] flex flex-col overflow-y-auto mr-[16px] mt-[20px]">
          {urlList.map((url) => (
            <button
              type="button"
              onClick={() => setUrlChoosing(url)}
              className={
                urlChoosing.id === url.id
                  ? 'w-[376px] h-[100px] flex flex-col items-left justify-center pl-[20px] py-[20px] mb-[20px] bg-gdscBlue-50 border text-gdscBlue-300 border-gdscBlue-300 rounded-[8px]'
                  : 'w-[376px] h-[100px] flex flex-col items-left pl-[20px] py-[20px] mb-[20px] bg-gdscGrey-100 border-0 rounded-[8px] hover:bg-gdscBlue-50 hover:border hover:border-gdscBlue-300 hover:text-gdscBlue-300'
              }
            >
              <div className="inline-block text-[20px] text-black font-medium">
                {url.link}
              </div>
              <div className="inline-block text-[16px] text-gdscGrey-700 font-normal">
                {url.shortLink}
              </div>
            </button>
          ))}
        </div>
        <div className="w-[1036px] flex flex-col bg-white pt-[20px]">
          <div className="h-auto w-full flex flex-row pr-[20px]">
            <div className="inline-block w-auto h-auto mr-[20px]">
              <ExpireTime expireTime="test 2" />
            </div>
            <div className="inline-block w-auto h-auto mr-[20px]">
              <CreatedOn createOn="Test 1" />
            </div>
            <div className="inline-block w-auto h-auto mr-[20px]">
              <TodayClick todayClick={56} />
            </div>
          </div>
          <div className="h-auto w-full flex items-start mt-[20px]">
            <TotalClick totalClick={95} />
          </div>
          <button
            type="button"
            className="p-2"
            onClick={() => setUrlList([
              ...urlList,
              {
                link: 'link1',
                shortLink: 'text1',
                id: `x1x2x3${urlList.length}`,
              },
            ])}
          >
            Adding
          </button>
        </div>
      </div>
    </div>
  );
}

UserInformation.propTypes = {
  setGetUrl: PropTypes.func.isRequired,
  getUrl: PropTypes.string.isRequired,
};
