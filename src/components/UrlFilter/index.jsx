import PropTypes from 'prop-types';
import React, { useState } from 'react';

import AddToBlackListIcon from 'assets/icons/add_to_blacklist.svg';
import GraphIcon from 'assets/icons/graph_icon.svg';
import LeftArrowIcon from 'assets/icons/left_arrow.svg';
import LimitDomainIcon from 'assets/icons/limit_domain_icon.svg';
import MoreInfoIcon from 'assets/icons/more-info.svg';
import RightArrowIcon from 'assets/icons/right_arrow.svg';
// import SearchIcon from 'assets/icons/search.svg';

export default function UrlFilter({ setGetUrl }) {
  const [search, setSearch] = useState('');
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
  const limit = 15;
  const [maxPage, setMaxPage] = useState(1);

  const AddingUrl = (newLink, newOrg) => {
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
    setMaxPage(Math.ceil(urls.length / limit));
  };

  const deleteUrl = (url) => {
    const listUser = urls.filter((e) => e.id !== url.id);
    setUrls(listUser);
  };

  return (
    <div className="relative pl-16 pt-8 overflow-y-scroll no-scrollbar-desktop">
      <h1 className="text-3xl font-medium mb-5">URL Filters</h1>
      <div className="flex flex-row items-center mb-8">
        <input
          className="h-[60px] w-[376px] text-base flex items-center justify-between px-[20px] mr-[26px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus:border-gdscBlue-300"
          value={search}
          type="text"
          placeholder="Search URL..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          className="h-[60px] w-[200px] text-base flex items-center justify-between px-[20px] mr-[26px] outline-none rounded-[8px] border bg-white border-gdscGrey-300 focus:border-gdscBlue-300"
          placeholder="dd/mm/yyyy"
        />
        <div className="h-[60px] w-[272px] text-base flex items-center justify-between px-[20px] rounded-[8px] border bg-white border-gdscGrey-300 text-gdscGrey-700">
          <p>More than: None</p>
        </div>
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
            <div
              className=" h-14 w-full flex aligns-center flex-row border border-gray-100 mb-2 rounded-[8px] text-base hover:bg-gdscBlue-50 hover:text-gdscBlue-300"
              key={url.id}
            >
              <div className="flex items-center justify-center w-[90px]">
                <img
                  src={GraphIcon}
                  className="w-7 h-7 mr-2 fill-gdscGreen-300"
                  alt="graph icon increase"
                />
                <p className="text-gdscGreen-300">2</p>
              </div>
              <div className="relative h-14 w-[500px] flex items-center text-left mr-[36px] truncate">
                {url.link}
              </div>
              <p className="inline-flex items-center justify-left w-[168px] mr-[40px] truncate">
                {url.org}
              </p>
              <div className="inline-flex items-center justify-center w-[162px] mr-[20px] truncate">
                {url.date}
              </div>
              <div className="flex items-center justify-center w-[172px] mr-[20px] truncate">
                {url.totalClicks}
              </div>
              <div className="flex items-center justify-center flex-row w-[148px]">
                <button
                  type="button"
                  className="relative w-[24px] h-[24px] flex items-center justify-center cursor-pointer mr-4 bg-[#D5E1F5] rounded-[8px] overflow-hidden hover:overflow-visible"
                >
                  <img
                    src={AddToBlackListIcon}
                    alt="add-to-blacklist"
                    className="w-[16px] h-[12px] fill-gdscBlue-300"
                    opacity="0.87"
                  />
                  <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
                    Add to blacklist
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => deleteUrl(url)}
                  className="relative w-[24px] h-[24px] flex items-center justify-center cursor-pointer mr-4 bg-[#D5E1F5] rounded-[8px] overflow-hidden hover:overflow-visible"
                >
                  <img
                    src={LimitDomainIcon}
                    alt="limit-domain"
                    className="w-[14px] h-[14px] fill-gdscBlue-300"
                    opacity="0.87"
                  />
                  <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
                    Limit domain
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setGetUrl(url.link)}
                  className="relative w-[24px] h-[24px] flex items-center justify-center cursor-pointer bg-[#D5E1F5] rounded-[8px] overflow-hidden hover:overflow-visible"
                >
                  <img
                    src={MoreInfoIcon}
                    alt="more-information"
                    className="w-[4px] h-[12px] fill-gdscBlue-300"
                    opacity="0.87"
                  />
                  <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
                    More information
                  </span>
                </button>
              </div>
            </div>
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
            <div
              className={
                page === maxPage
                  ? 'w-10 h-10 flex items-center justify-center text-base text-blue-500 bg-blue-100 rounded-full mr-[18px] cursor-pointer'
                  : 'w-10 h-10 flex items-center justify-center text-base text-gray-500 bg-transparent mr-[18px]'
              }
            >
              1
            </div>
            <button
              type="button"
              className="flex justify-center items-center p-1 text-base text-gray-500 cursor-pointer"
              disabled={page >= maxPage}
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
          onClick={() => AddingUrl(addLink, addOrg)}
        >
          Add Url
        </button>
      </div>
    </div>
  );
}

UrlFilter.propTypes = {
  setGetUrl: PropTypes.func,
};

UrlFilter.defaultProps = {
  setGetUrl: () => {},
};
