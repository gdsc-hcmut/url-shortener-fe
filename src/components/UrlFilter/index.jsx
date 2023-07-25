import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import ArrowDownIcon from 'assets/icons/arrow_down.svg';
import SearchIcon from 'assets/icons/search.svg';
import ListBox from 'components/ListBox';
import PaginationBar from 'components/PaginationBar';
import {
  LAST_DAY, LAST_3_DAYS, LAST_WEEK, LAST_MONTH,
} from 'constant/options';
import UrlAPI from 'services/url.service';

import UrlRow from './UrlRow';
import UserSearch from './UserSearch';

const optionsTime = ['All', LAST_DAY, LAST_3_DAYS, LAST_WEEK, LAST_MONTH];

export default function UrlFilter() {
  const typingTimeoutRef = useRef(null);
  const [searchUrlsKeyword, setSearchUrlsKeyword] = useState('');
  const [selectedOptionTime, setSelectedOptionTime] = useState(optionsTime[0]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [urls, setUrls] = useState([]);
  const [totalUrls, setTotalUrls] = useState(0);
  const [user, setUser] = useState('');

  const [isLoadingUrlList, setIsLoadingUrlList] = useState(false);
  const [isModeAllUrl, setIsModeAllUrl] = useState(true);
  const [isOpenTimeOptions, setIsOpenTimeOption] = useState(false);

  // Get All Url list
  const getAllUrlList = async () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(async () => {
      const userId = user ? user.id : '';
      const { data } = await UrlAPI.getAllUrl(
        page,
        searchUrlsKeyword,
        userId,
        selectedOptionTime,
      );
      setTotalUrls(data.payload.total);
      setUrls(data.payload.list);
      setMaxPage(data.payload.totalPage);
    }, 300);
  };

  // Add an url to blacklist
  const addUrlToBlacklist = async (id) => {
    await UrlAPI.addUrlToBlacklist(id);
    await getAllUrlList();
    if (page > maxPage) {
      setPage(maxPage);
    }
  };

  useEffect(async () => {
    setIsLoadingUrlList(true);
    if (page !== 1) setPage(1);
    await getAllUrlList();
    setIsLoadingUrlList(false);
  }, [user]);

  useEffect(async () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    setIsLoadingUrlList(true);
    typingTimeoutRef.current = setTimeout(async () => {
      if (page !== 1) setPage(1);
      await getAllUrlList();
      setIsLoadingUrlList(false);
    }, 300);
  }, [searchUrlsKeyword]);

  useEffect(async () => {
    setIsLoadingUrlList(true);
    await getAllUrlList();
    setIsLoadingUrlList(false);
  }, [page]);

  useEffect(async () => {
    setIsLoadingUrlList(true);
    if (page !== 1) setPage(1);
    await getAllUrlList();
    setIsLoadingUrlList(false);
  }, [selectedOptionTime]);

  return (
    <div className="relative pl-[60px] pt-[40px] overflow-y-scroll no-scrollbar-desktop">
      <h1 className="font-normal text-[32px] leading-10 mb-[20px]">
        URL Filters
      </h1>
      <div className="flex flex-col items-start mb-[20px] gap-[20px] xl:flex-row">
        <div className="h-[60px] w-[576px] xl:w-[392px] text-base flex items-center justify-between pl-[20px] pr-[0px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
          <input
            className="outline-none bg-transparent w-full"
            value={searchUrlsKeyword}
            type="text"
            placeholder="Search URL..."
            onChange={(e) => setSearchUrlsKeyword(e.target.value)}
          />
          <div className="h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
            <img
              src={SearchIcon}
              className="h-[18px] w-[18px]"
              alt="search icon"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[20px]">
          <UserSearch userEmail={user ? user.email : ''} setUser={setUser} />
          <button
            type="button"
            className="h-[60px] w-[196px] bg-white border border-gdscGrey-300 relative flex flex-row items-center justify-between my-0 px-[20px] cursor-pointer focus-within:border-gdscBlue-300 text-[16px] text-gdscGrey-800 rounded-[8px]"
            onClick={() => setIsOpenTimeOption(!isOpenTimeOptions)}
          >
            <span className="truncate">{selectedOptionTime}</span>
            <img
              src={ArrowDownIcon}
              className="w-[12px] h-[8px]"
              alt="arrow down icon"
            />
            <ListBox
              options={optionsTime}
              selectedOption={selectedOptionTime}
              onClick={setSelectedOptionTime}
              isOpen={isOpenTimeOptions}
              setIsOpen={setIsOpenTimeOption}
            />
          </button>
        </div>
      </div>

      {isLoadingUrlList ? (
        <div className="text-center">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <div className="w-[1436px] flex flex-row justify-between text-[20px]">
            <div className="flex flex-row items-center -mb-px">
              <button
                type="button"
                className={
                  !isModeAllUrl
                    ? 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer text-gdscGrey-700'
                    : 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer border-x border-t border-gdscGrey-500 bg-white text-gdscBlue-300 rounded-t-[8px]'
                }
                onClick={() => setIsModeAllUrl(true)}
              >
                ALL
              </button>
              <button
                type="button"
                className={
                  isModeAllUrl
                    ? 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer text-gdscGrey-700'
                    : 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer border-x border-t border-gdscGrey-500 bg-white text-gdscBlue-300 rounded-t-[8px]'
                }
                onClick={() => setIsModeAllUrl(false)}
              >
                SUSPECTED
              </button>
            </div>
            <div className="h-12 flex flex-row items-center justify-left text-gdscGrey-700">
              <div className="mr-1">Total:</div>
              <div className="mr-1">{totalUrls}</div>
              <div>results</div>
            </div>
          </div>
          <div className="h-auto w-[1436px] bg-white border border-gdscGrey-500">
            <table className="w-full h-auto">
              <thead>
                <tr className="h-16 flex items-center flex-row bg-[#F9F9F9] text-xl border-b border-gray-500 mb-2">
                  <li className="flex items-center justify-center w-[98px] border-r text-gdscBlue-300 border-gdscGrey-400">
                    <p>TREND</p>
                  </li>
                  <li className="flex items-center justify-center w-[536px] border-r text-gdscBlue-300 border-gdscGrey-400">
                    <p>LONG LINK</p>
                  </li>
                  <li className="flex items-center justify-center w-[208px] border-r text-gdscBlue-300 border-gdscGrey-400">
                    <p>ORGANIZATION</p>
                  </li>
                  <li className="flex items-center justify-center w-[182px] border-r text-gdscBlue-300 border-gdscGrey-400">
                    <p>CREATED AT</p>
                  </li>
                  <li className="flex items-center justify-center w-[192px] border-r text-gdscBlue-300 border-gdscGrey-400">
                    <p>TOTAL CLICKS</p>
                  </li>
                  <li className="flex items-center justify-center w-[148px] border-r text-gdscBlue-300 border-gdscGrey-400">
                    <p>ACTIONS</p>
                  </li>
                </tr>
              </thead>
              <tbody className="flex aligns-center flex-col px-[8px] font-light">
                {urls.map((url) => (
                  <UrlRow url={url} addUrlToBlacklist={addUrlToBlacklist} />
                ))}
              </tbody>
            </table>
            <div className="my-2">
              {totalUrls > 0 ? (
                <PaginationBar
                  page={page}
                  maxPage={maxPage}
                  setPage={setPage}
                />
              ) : (
                <div className="flex items-center justify-center text-[20px] text-gdscGrey-800 font-normal">
                  No urls had been found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
