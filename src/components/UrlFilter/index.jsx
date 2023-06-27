import React, { useState } from 'react';

import AddToBlackList from 'assets/icons/add_to_blacklist.svg';
import GraphIcon from 'assets/icons/graph_icon.svg';
import LeftArrow from 'assets/icons/left_arrow.svg';
import LimitDomain from 'assets/icons/limit_domain_icon.svg';
import MoreInfo from 'assets/icons/more-info.svg';
import Rightarrow from 'assets/icons/right_arrow.svg';

export default function UrlFilter() {
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
    console.log('MaxPage >>> ', maxPage);
  };

  const DeleteUrl = (url) => {
    const listUser = urls.filter((e) => e.id !== url.id);
    setUrls(listUser);
  };

  return (
    <div className="relative pl-16 pt-8 overflow-y-scroll no-scrollbar-desktop">
      <h1 className="text-3xl font-medium mb-5">URL Filters</h1>
      <div className="flex flex-row items-center mb-8">
        <input
          className="h-16 w-[400px] text-base flex items-center justify-between pl-5 pr-5 mr-6 border bg-white border-blue-500 text-gray-500 rounded-lg"
          value={search}
          type="text"
          placeholder="Search URL..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          className="h-16 w-48 text-base flex items-center justify-between pl-5 pr-5 mr-6 rounded-lg border bg-white border-blue-500 text-gray-500"
          placeholder="dd/mm/yyyy"
        />
        <div className="h-16 w-48 text-base flex items-center justify-between pl-5 pr-5 rounded-lg border bg-white border-blue-500">
          <p>More than: None</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[1400px] text-xl">
        <div className="flex flex-row items-center -mb-px">
          <button
            type="button"
            className={
              !modeAllUrl
                ? 'w-40 h-12 flex items-center justify-center cursor-pointer'
                : 'w-40 h-12 flex items-center justify-center cursor-pointer border-x border-t border-gray-400 bg-white text-blue-500 rounded-e-lg'
            }
            onClick={() => setModeAllUrl(true)}
          >
            ALL
          </button>
          <button
            type="button"
            className={
              modeAllUrl
                ? 'w-40 h-12 flex items-center justify-center cursor-pointer'
                : 'w-40 h-12 flex items-center justify-center cursor-pointer border-x border-t border-gray-400 bg-white text-blue-500 rounded-e-lg'
            }
            onClick={() => setModeAllUrl(false)}
          >
            SUSPECTED
          </button>
        </div>
        <div className="h-12 flex flex-row items-center justify-left text-gray-500">
          <div className="mr-1">Total:</div>
          <div className="mr-1">{urls.length}</div>
          <div>results</div>
        </div>
      </div>
      <div className="h-240 w-[1400px] bg-white border border-gray-400">
        <div className="h-16 flex items-center flex-row bg-gray-100 text-xl border-b border-gray-500 mb-2 rounded-lg">
          <div className="flex items-center justify-center w-[100px] border-r border-gray-500">
            <p>TREND</p>
          </div>
          <div className="flex items-center justify-center w-[560px] border-r border-gray-500">
            <p>LONG LINK</p>
          </div>
          <div className="flex items-center justify-center w-[180px] border-r border-gray-500">
            <p>ORGANIZATION</p>
          </div>
          <div className="flex items-center justify-center w-[180px] border-r border-gray-500">
            <p>CREATED AT</p>
          </div>
          <div className="flex items-center justify-center w-[180px] border-r border-gray-500">
            <p>TOTAL CLICKS</p>
          </div>
          <div className="flex items-center justify-center w-[200px]">
            <p>ACTIONS</p>
          </div>
        </div>
        <div className="flex aligns-center flex-col px-[8px]">
          {urls.map((url) => (
            <div className=" h-14 w-full flex aligns-center flex-row border border-gray-100 mb-2 rounded-lg text-base">
              <div className="flex items-center justify-center w-[92px]">
                <img
                  src={GraphIcon}
                  fill="#0f9d58"
                  className="w-7 h-7 mr-2"
                  alt="graph icon increase"
                />
                <p className="text-green-700">2</p>
              </div>
              <div className="h-14 w-[520px] max-w-[520px] flex items-center text-left mr-[40px] truncate">
                {url.link}
              </div>
              <p className="inline-flex items-center text-left w-[160px] mr-[20px] truncate">
                {url.org}
              </p>
              <div className="inline-flex items-center justify-center w-[180px]">
                {url.date}
              </div>
              <div className="flex items-center justify-center w-[180px]">
                {url.totalClicks}
              </div>
              <div className="flex items-center justify-center flex-row w-[192px]">
                <button
                  type="button"
                  className="w-7 h-7 flex items-center justify-center cursor-pointer mr-4 bg-gray-300 rounded-md"
                >
                  <img
                    src={AddToBlackList}
                    alt="add-to-blacklist"
                    className="w-5 h-5"
                    fill="#4285F4"
                    opacity="0.87"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => DeleteUrl(url)}
                  className="w-7 h-7 flex items-center justify-center cursor-pointer mr-4 bg-gray-300 rounded-md"
                >
                  <img
                    src={LimitDomain}
                    alt="limit-domain"
                    className="w-5 h-5"
                    fill="#4285F4"
                    opacity="0.87"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    console.log(url);
                  }}
                  className="w-7 h-7 flex items-center justify-center cursor-pointer bg-gray-300 rounded-md"
                >
                  <img
                    src={MoreInfo}
                    alt="more-information"
                    className="w-5 h-5"
                    fill="#4285F4"
                    opacity="0.87"
                  />
                </button>
              </div>
            </div>
          ))}
          <div className="h-12 flex flex-row items-center justify-center p-2 my-2">
            <button
              type="button"
              className="flex flex-row justify-center items-center p-1 mr-[18px] text-base text-black cursor-pointer"
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
              <img
                src={LeftArrow}
                className="h-5 w-5"
                opacity="0.87"
                alt="left-arrow"
              />
            </button>
            <div
              className={
                page === maxPage
                  ? 'w-10 h-10 flex items-center justify-center text-base text-blue-500 bg-blue-100 rounded-full mr-[18px]'
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
                src={Rightarrow}
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
