import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

// import CloseIcon from 'assets/icons/close_icon_snackbar.svg';
import SearchIcon from 'assets/icons/search.svg';
import UrlAPI from 'services/url.service';

export default function UrlSearch({ addUrl }) {
  const typingTimeoutRef = useRef(null);
  const [searchSlugKeyword, setSearchSlugKeyword] = useState('');
  const [suggestedUsersList, setSuggestedUsersList] = useState([]);

  const [isLoadingUserList, setIsLoadingUserList] = useState(false);
  const [isSearchingUser, setIsSearchingUser] = useState(false);

  const setFindByUserMode = async (userName) => {
    // console.log(userName);
    const { _id } = userName;
    await addUrl(_id);
    // setUrl(userName);
    setSearchSlugKeyword('');
  };

  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    if (searchSlugKeyword) {
      setIsSearchingUser(true);
      setIsLoadingUserList(true);
      typingTimeoutRef.current = setTimeout(async () => {
        const response = await UrlAPI.findAddingUrl(searchSlugKeyword);
        const { list } = response.data.payload;
        setSuggestedUsersList(list);
        setIsLoadingUserList(false);
      }, 300);
    } else {
      setIsSearchingUser(false);
      setIsLoadingUserList(false);
    }
  }, [searchSlugKeyword]);

  useEffect(() => {
    const closeSelect = () => setIsSearchingUser(false);
    setTimeout(() => {
      if (isSearchingUser) {
        window.addEventListener('click', closeSelect);
      }
    }, 0);
    return () => window.removeEventListener('click', closeSelect);
  }, [isSearchingUser]);
  return (
    <div className="relative h-[40px] w-[300px] text-xs flex items-center justify-between pl-[12px] pr-[0px] outline-none border bg-white border-gdscGrey-300 text-gdscGrey-700 rounded-[8px] focus-within:border-gdscBlue-300">
      <input
        className="outline-none bg-transparent w-full"
        value={searchSlugKeyword}
        type="text"
        placeholder="Add Url by Slug"
        onChange={(e) => setSearchSlugKeyword(e.target.value)}
      />
      <div className="h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
        <img src={SearchIcon} className="h-[12px] w-[12px]" alt="search icon" />
      </div>
      {isLoadingUserList ? (
        <div className="absolute w-[300px] h-[60px] flex items-center justify-center bg-white left-0 top-[120%] rounded-[8px]">
          <CircularProgress
            color="inherit"
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      ) : (
        <div
          className={`w-[300px] absolute bg-white flex flex-col text-center z-20 left-0 top-[120%] rounded-[8px] ${
            isSearchingUser ? '' : 'hidden'
          }`}
        >
          {suggestedUsersList.length !== 0 ? (
            suggestedUsersList.map((option) => (
              <button
                key={option.id}
                type="button"
                className="flex items-center text-left px-[12px] py-[8px] hover:bg-gdscBlue-50 hover:text-gdscBlue-300 whitespace-nowrap"
                onClick={() => {
                  setFindByUserMode(option);
                  setIsSearchingUser(false);
                }}
              >
                {`${option.slug} (${option.organization})`}
              </button>
            ))
          ) : (
            <div className="flex items-center justify-center px-[20px] py-[12px] hover:bg-gdscBlue-50 whitespace-nowrap">
              No slug match
            </div>
          )}
        </div>
      )}
    </div>
  );
}

UrlSearch.propTypes = {
  addUrl: PropTypes.func.isRequired,
  //   urlSlug: PropTypes.string,
};

// UrlSearch.defaultProps = {
//   urlSlug: '',
// };
