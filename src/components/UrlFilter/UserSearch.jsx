import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import CloseIcon from 'assets/icons/close_icon_snackbar.svg';
import SearchIcon from 'assets/icons/search.svg';
import UrlAPI from 'services/url.service';

export default function UserSearch({ setUser, userEmail }) {
  const typingTimeoutRef = useRef(null);
  const [searchUsersKeyword, setSearchUsersKeyword] = useState('');
  const [suggestedUsersList, setSuggestedUsersList] = useState([]);

  const [isLoadingUserList, setIsLoadingUserList] = useState(false);
  const [isSearchingUser, setIsSearchingUser] = useState(false);

  const setFindByUserMode = (userName) => {
    setUser(userName);
    setSearchUsersKeyword('');
  };

  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (searchUsersKeyword) {
      setIsSearchingUser(true);
      setIsLoadingUserList(true);
      typingTimeoutRef.current = setTimeout(async () => {
        const response = await UrlAPI.getUserByEmail(searchUsersKeyword);
        const { list } = response.data.payload;
        setSuggestedUsersList(list);
        setIsLoadingUserList(false);
      }, 300);
    } else {
      setIsSearchingUser(false);
      setIsLoadingUserList(false);
    }
  }, [searchUsersKeyword]);

  useEffect(() => {
    const closeSelect = () => setIsSearchingUser(false);
    setTimeout(() => {
      if (isSearchingUser) {
        window.addEventListener('click', closeSelect);
      }
    }, 0);
    return () => window.removeEventListener('click', closeSelect);
  }, [isSearchingUser]);

  if (userEmail) {
    return (
      <div className="h-[60px] w-[360px] text-base flex items-center justify-between pl-[20px] pr-[0px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
        <span>{userEmail}</span>
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
    );
  }
  return (
    <div className="relative h-[60px] w-[360px] text-base flex items-center justify-between pl-[20px] pr-[0px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
      <input
        className="outline-none bg-transparent w-full"
        value={searchUsersKeyword}
        type="text"
        placeholder="Search url by user"
        onChange={(e) => setSearchUsersKeyword(e.target.value)}
      />
      <div className="h-[60px] w-[60px] flex items-center justify-center cursor-pointer">
        <img src={SearchIcon} className="h-[18px] w-[18px]" alt="search icon" />
      </div>
      {isLoadingUserList ? (
        <div className="absolute w-[360px] h-[112px] flex items-center justify-center bg-white left-0 top-[120%] rounded-[8px]">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div
          className={`w-auto absolute bg-white flex flex-col text-center z-20 left-0 top-[120%] rounded-[8px] ${
            isSearchingUser ? '' : 'hidden'
          }`}
        >
          {suggestedUsersList.length !== 0 ? (
            suggestedUsersList.map((option) => (
              <button
                key={option.id}
                type="button"
                className="w-auto flex items-center text-left px-[20px] py-[12px] hover:bg-gdscBlue-50 hover:text-gdscBlue-300 whitespace-nowrap"
                onClick={() => {
                  setFindByUserMode(option);
                  setIsSearchingUser(false);
                }}
              >
                {option.email}
              </button>
            ))
          ) : (
            <div className="w-[360px] flex items-center justify-center px-[20px] py-[12px] hover:bg-gdscBlue-50 whitespace-nowrap">
              No users match
            </div>
          )}
        </div>
      )}
    </div>
  );
}

UserSearch.propTypes = {
  setUser: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
};

UserSearch.defaultProps = {
  userEmail: '',
};
