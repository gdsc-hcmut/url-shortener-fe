import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import ArrowDownIcon from 'assets/icons/arrow_down.svg';
import CloseIcon from 'assets/icons/close_icon_snackbar.svg';
import LeftArrowIcon from 'assets/icons/left_arrow.svg';
import RightArrowIcon from 'assets/icons/right_arrow.svg';
import SearchIcon from 'assets/icons/search.svg';
import ListBox from 'components/ListBox';

import UrlRow from './UrlRow';
// import SearchIcon from 'assets/icons/search.svg';
const optionsTime = [
  'All time',
  'Since last 3 days',
  'Since last week',
  'Since last 3 weeks',
  'Since last month',
];

export default function UrlFilter({ fetchSuggestedUsersList }) {
  const [searchUrlsKeyword, setSearchUrlsKeyword] = useState('');
  const [searchUsersKeyword, setSearchUsersKeyword] = useState('');
  const [selectedOptionTime, setSelectedOptionTime] = useState(optionsTime[0]);
  const [page, setPage] = useState(1);
  const [urls, setUrls] = useState([
    {
      id: '1',
      link: 'https://www.youtube.com/watch?v=d2oiY18E23I&list=RDd2oiY18E23I&start_radio=1https://www.youtube.com/watch?v=d2oiY18E23I&list=RDd2oiY18E23I&start_radio=1',
      org: 'trung tran',
      date: '26/03/2022 at 16:23',
      totalClicks: 0,
      isSuspected: true,
    },
    {
      id: '2',
      link: 'test link 2',
      org: 'trung tran',
      date: 'test',
      totalClicks: 156020,
      isSuspected: false,
    },
  ]);
  const [user, setUser] = useState('');
  const [keywordAddLink, setKeyWordAddLink] = useState([]);
  const [addOrg, setAddOrg] = useState([]);
  const [suggestedUsersList, setSuggestedUsersList] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  const [isSearchingUser, setIsSearchingUser] = useState(false);
  const [isModeAllUrl, setIsModeAllUrl] = useState(true);
  const [isOpenTimeOptions, setIsOpenTimeOption] = useState(false);

  const addingUrl = (newLink, newOrg) => {
    const current = new Date();
    const newUrl = {
      id: newLink + newOrg,
      link: newLink,
      org: newOrg,
      date: `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`,
      totalClicks: 0,
    };
    setUrls([...urls, newUrl]);
    setKeyWordAddLink('');
    setAddOrg('');
  };

  const deleteUrl = (url) => {
    const listUser = urls.filter((e) => e.id !== url.id);
    setUrls(listUser);
    setSelectedOptionTime(optionsTime[0]);
  };

  const setFindByUserMode = (userName) => {
    setUser(userName);
    setSearchUsersKeyword('');
  };

  useEffect(() => {
    if (searchUsersKeyword) {
      setIsSearchingUser(true);
      const suggestionList = fetchSuggestedUsersList(searchUsersKeyword);
      setSuggestedUsersList(suggestionList);
      // setIsLoading(true);
    } else {
      setIsSearchingUser(false);
    }
  }, [searchUsersKeyword]);

  // useEffect(async () => {
  //   if (idUser){
  //     UrlFilter
  //   }
  // }, [idUser]);
  return (
    <div className="relative pl-16 pt-8 overflow-y-scroll no-scrollbar-desktop">
      <h1 className="text-3xl font-medium mb-[20px]">URL Filters</h1>
      <div className="flex flex-row items-center mb-[20px]">
        <div className="h-[60px] w-[376px] text-base flex items-center justify-between pl-[20px] pr-[0px] mr-[20px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
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
        {user ? (
          <div className="h-[60px] w-[376px] text-base flex items-center justify-between pl-[20px] pr-[0px] mr-[20px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
            <span>{user}</span>
            <button
              type="button"
              className="h-[60px] w-[60px] flex items-center justify-center cursor-pointer"
              onClick={() => setFindByUserMode('')}
            >
              <img
                src={CloseIcon}
                className="h-[24px] w-[24px] fill-gdscGrey-700 opacity-80"
                alt="close icon"
              />
            </button>
          </div>
        ) : (
          <div className="relative h-[60px] w-[376px] text-base flex items-center justify-between pl-[20px] pr-[0px] mr-[20px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
            <input
              className="outline-none bg-transparent w-full"
              value={searchUsersKeyword}
              type="text"
              placeholder="Search Users..."
              onChange={(e) => setSearchUsersKeyword(e.target.value)}
            />
            <div className="h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
              <img
                src={SearchIcon}
                className="h-[18px] w-[18px]"
                alt="search icon"
              />
            </div>
            <ListBox
              options={suggestedUsersList}
              onClick={setFindByUserMode}
              isOpen={isSearchingUser}
              setIsOpen={setIsSearchingUser}
            />
          </div>
        )}
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
          <div className="mr-1">{urls.length}</div>
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
              <UrlRow url={url} deleteUrl={deleteUrl} />
            ))}
          </tbody>
        </table>
        <div className="h-12 flex flex-row items-center justify-center p-2 my-2">
          <button
            type="button"
            className="flex flex-row justify-center items-center p-1 mr-[18px] text-base cursor-pointer"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            <img
              src={LeftArrowIcon}
              className="h-[16px] w-[16px] fill-gdscBlue-300 opacity-80"
              alt="left arrow icon"
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
              className="h-[16px] w-[16px]"
              opacity="0.87"
              alt="right arrow icon"
            />
          </button>
        </div>
      </div>
      <div className="flex aligns-center flex-col mt-[100px]">
        <input
          type="text"
          className="w-80 h-12 pl-2"
          value={keywordAddLink}
          onChange={(e) => setKeyWordAddLink(e.target.value)}
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
          onClick={() => addingUrl(keywordAddLink, addOrg)}
        >
          Add Url
        </button>
      </div>
    </div>
  );
}

UrlFilter.propTypes = {
  // fetchAllUrl: PropTypes.func,
  // fetchUserUrl: PropTypes.func,
  fetchSuggestedUsersList: PropTypes.func,
};

UrlFilter.defaultProps = {
  // fetchAllUrl: () => {},
  // fetchUserUrl: () => {},
  fetchSuggestedUsersList: (searchKeyword) => [
    `${searchKeyword}@gmail.com`,
    `${searchKeyword}@hcmut.edu.vn`,
  ],
};
