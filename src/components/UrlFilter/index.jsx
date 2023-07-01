import React, { useState } from 'react';

import ArrowDownIcon from 'assets/icons/arrow_down.svg';
import LeftArrowIcon from 'assets/icons/left_arrow.svg';
import RightArrowIcon from 'assets/icons/right_arrow.svg';
import SearchIcon from 'assets/icons/search.svg';

import UrlShow from './UrlShow';
// import SearchIcon from 'assets/icons/search.svg';

export default function UrlFilter() {
  const [search, setSearch] = useState('');
  const [searchMode, setSearchMode] = useState('All');
  const [searchHidden, setSearchHidden] = useState(true);
  const [modeAllUrl, setModeAllUrl] = useState(true);
  const [urls, setUrls] = useState([
    {
      id: '1',
      link: 'test link 1',
      org: 'trung tran',
      date: 'test',
      totalClicks: 0,
    },
    {
      id: '2',
      link: 'test link 2',
      org: 'trung tran',
      date: 'test',
      totalClicks: 156020,
    },
  ]);
  const [addLink, setAddLink] = useState([]);
  const [addOrg, setAddOrg] = useState([]);
  const [page, setPage] = useState(1);

  const addingUrl = (newLink, newOrg) => {
    const current = new Date();
    const newUrl = {
      id: newLink + newOrg,
      link: newLink,
      org: newOrg,
      date: `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
      totalClicks: 0,
    };
    setUrls([...urls, newUrl]);
    setAddLink('');
    setAddOrg('');
  };

  const deleteUrl = (url) => {
    const listUser = urls.filter((e) => e.id !== url.id);
    setUrls(listUser);
  };

  const changeSearchMode = (mode) => {
    setSearchHidden(true);
    setSearchMode(mode);
  };

  return (
    <div className="relative pl-16 pt-8 overflow-y-scroll no-scrollbar-desktop">
      <h1 className="text-3xl font-medium mb-5">URL Filters</h1>
      <div className="flex flex-row items-center mb-8">
        <div className="h-[60px] w-[376px] text-base flex items-center justify-between pl-[20px] pr-[0px] mr-[26px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
          <input
            className="outline-none bg-transparent"
            value={search}
            type="text"
            placeholder="Search URL..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
            <img
              src={SearchIcon}
              className="h-[18px] w-[18px]"
              alt="search-icon"
            />
          </div>
        </div>
        <input
          type="date"
          className="h-[60px] w-[200px] text-base flex items-center justify-between px-[20px] mr-[26px] outline-none rounded-[8px] border bg-white border-gdscGrey-300 focus:border-gdscBlue-300"
          placeholder="dd/mm/yyyy"
        />
        <button
          type="button"
          className={`h-[60px] w-[272px] relative text-[16px] text-gdscGrey-800 flex flex-row items-center justify-between px-[20px] rounded-[8px] border bg-white border-gdscGrey-300 focus-within:border-gdscBlue-300 ${
            searchHidden ? 'overflow-hidden' : 'overflow-visible'
          }`}
          onClick={() => setSearchHidden(!searchHidden)}
        >
          <div>{searchMode}</div>
          <img src={ArrowDownIcon} alt="arrow-down-icon" />
          <div className="w-[272px] absolute bg-white flex flex-col text-center pt-[10px] z-2 left-0 top-[110%] rounded-[8px]">
            {['All', 'More than 1000', 'More than 2000']
              .filter((mode) => mode !== searchMode)
              .map((mode) => (
                <button
                  type="button"
                  className="flex items-center text-left pl-[20px] mb-[10px]"
                  onClick={() => changeSearchMode(mode)}
                >
                  {mode}
                </button>
              ))}
          </div>
        </button>
      </div>
      <div className="w-[1436px] flex flex-row justify-between text-[20px]">
        <div className="flex flex-row items-center -mb-px">
          <button
            type="button"
            className={
              !modeAllUrl
                ? 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer text-gdscGrey-700'
                : 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer border-x border-t border-gdscGrey-500 bg-white text-gdscBlue-300 rounded-t-[8px]'
            }
            onClick={() => setModeAllUrl(true)}
          >
            ALL
          </button>
          <button
            type="button"
            className={
              modeAllUrl
                ? 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer text-gdscGrey-700'
                : 'w-[176px] h-[52px] flex items-center justify-center cursor-pointer border-x border-t border-gdscGrey-500 bg-white text-gdscBlue-300 rounded-t-[8px]'
            }
            onClick={() => setModeAllUrl(false)}
          >
            SUSPECTED
          </button>
        </div>
        <div className="h-12 flex flex-row items-center justify-left text-gdscGrey-700">
          <div className="mr-1">Total:</div>
          <div className="mr-1">{urls.length}</div>
          <div>results</div>
        </div>
      </div>
      <div className="h-auto w-[1436px] bg-white border border-gdscGrey-500">
        <div className="h-16 flex items-center flex-row bg-[#F9F9F9] text-xl border-b border-gray-500 mb-2">
          <div className="flex items-center justify-center w-[98px] border-r text-gdscBlue-300 border-gdscGrey-400">
            <p>TREND</p>
          </div>
          <div className="flex items-center justify-center w-[536px] border-r text-gdscBlue-300 border-gdscGrey-400">
            <p>LONG LINK</p>
          </div>
          <div className="flex items-center justify-center w-[208px] border-r text-gdscBlue-300 border-gdscGrey-400">
            <p>ORGANIZATION</p>
          </div>
          <div className="flex items-center justify-center w-[182px] border-r text-gdscBlue-300 border-gdscGrey-400">
            <p>CREATED AT</p>
          </div>
          <div className="flex items-center justify-center w-[192px] border-r text-gdscBlue-300 border-gdscGrey-400">
            <p>TOTAL CLICKS</p>
          </div>
          <div className="flex items-center justify-center w-[148px] border-r text-gdscBlue-300 border-gdscGrey-400">
            <p>ACTIONS</p>
          </div>
        </div>
        <div className="flex aligns-center flex-col px-[8px]">
          {urls.map((url) => (
            <UrlShow url={url} deleteUrl={deleteUrl} />
          ))}
          <div className="h-12 flex flex-row items-center justify-center p-2 my-2">
            <button
              type="button"
              className="flex flex-row justify-center items-center p-1 mr-[18px] text-base cursor-pointer"
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
              <img
                src={LeftArrowIcon}
                className="h-5 w-5 fill-gdscBlue-300 opacity-80"
                alt="left-arrow"
              />
            </button>
            <button
              type="button"
              className={`w-10 h-10 flex items-center justify-center text-base rounded-full mr-[18px] cursor-pointer ${
                page === 1
                  ? 'text-blue-500 bg-blue-100'
                  : 'text-gray-500 bg-transparent'
              }`}
              onClick={() => setPage(1)}
            >
              1
            </button>
            <button
              type="button"
              className={`w-10 h-10 flex items-center justify-center text-base rounded-full mr-[18px] cursor-pointer ${
                page === 2
                  ? 'text-blue-500 bg-blue-100'
                  : 'text-gray-500 bg-transparent'
              }`}
              onClick={() => setPage(2)}
            >
              2
            </button>
            <button
              type="button"
              className={`w-10 h-10 flex items-center justify-center text-base rounded-full mr-[18px] cursor-pointer ${
                page === 3
                  ? 'text-blue-500 bg-blue-100'
                  : 'text-gray-500 bg-transparent'
              }`}
              onClick={() => setPage(3)}
            >
              3
            </button>
            <button
              type="button"
              className={`w-10 h-10 flex items-center justify-center text-base rounded-full mr-[18px] cursor-pointer ${
                page === 4
                  ? 'text-blue-500 bg-blue-100'
                  : 'text-gray-500 bg-transparent'
              }`}
              onClick={() => setPage(4)}
            >
              4
            </button>
            <button
              type="button"
              className={`w-10 h-10 flex items-center justify-center text-base rounded-full mr-[18px] cursor-pointer ${
                page === 5
                  ? 'text-blue-500 bg-blue-100'
                  : 'text-gray-500 bg-transparent'
              }`}
              onClick={() => setPage(5)}
            >
              5
            </button>
            <button
              type="button"
              className="flex justify-center items-center p-1 text-base text-gray-500 cursor-pointer"
              disabled={page >= 5}
              onClick={() => setPage(page + 1)}
            >
              <img
                src={RightArrowIcon}
                className="h-5 w-5"
                opacity="0.87"
                alt="right-arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex aligns-center flex-col mt-[100px]">
        <input
          type="text"
          className="w-80 h-12 pl-2"
          value={addLink}
          onChange={(e) => setAddLink(e.target.value)}
          placeholder="long-link"
        />
        <input
          type="text"
          className="w-80 h-12 pl-2"
          value={addOrg}
          onChange={(e) => setAddOrg(e.target.value)}
          placeholder="organization"
        />
        <button
          type="button"
          className="w-60 h-12 flex items-center justify-center bg-red-500 text-white transition ease-in-out delay-150 hover:scale-110 hover:bg-black duration-300"
          onClick={() => addingUrl(addLink, addOrg)}
        >
          Add Url
        </button>
      </div>
    </div>
  );
}
