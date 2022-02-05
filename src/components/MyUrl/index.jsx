import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import fakeGetUrlsList from 'services/getUrlsList';

export default function MyUrl({ slug }) {
  const [option, setOption] = useState('Most Clicked');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const sortOptions = ['Most Clicked', 'Less Clicked', 'Latest', 'Oldest'];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-opacity-0 flex flex-col md:w-[392px] h-full w-full md:pr-0 md:p-0 py-5 pr-5">
      <h1 className="font-normal text-[32px] leading-10">My URLs</h1>

      <button
        type="button"
        className="z-10 w-40 h-11 text-base text-gdscGrey-700 px-5 outline-none bg-white my-3 mx-0 self-end text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-gdscBlue-300 focus:border-gdscBlue-300 rounded block md:absolute md:mt-1 md:mr-4"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onClick={handleClick}
      >
        <span className="flex items-center justify-between">
          <span className="inline truncate py-3">{option}</span>
          <span className="">
            <ArrowDown />
          </span>
        </span>
        <div
          className={`relative top-2 right-5 space-y-2 w-40 h-[116px] bg-white rounded font-light shadow-md text-base px-5 py-3 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {sortOptions
            .filter((el) => el !== option)
            .map((el) => (
              <div
                aria-hidden="true"
                key={el}
                className="block"
                onClick={() => {
                  setOption(el);
                  setIsOpen(false);
                }}
              >
                {el}
              </div>
            ))}
        </div>
      </button>

      <input
        className="w-full h-14 bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 font-light md:w-[376px] relative"
        placeholder="Search your URL ..."
        value={search}
        onChange={handleSearch}
      />
      <ul className="md:overflow-y-scroll mt-10 space-y-10 relative h-full ">
        {fakeGetUrlsList
          .filter((url) => {
            if (url.longUrl.startsWith('http://www.')) {
              return url.longUrl.substring(11).startsWith(search);
            }

            if (url.longUrl.startsWith('https://')) {
              return url.longUrl.substring(8).startsWith(search);
            }

            if (url.longUrl.startsWith('http://')) {
              return url.longUrl.substring(7).startsWith(search);
            }

            if (url.longUrl.startsWith('www.')) {
              return url.longUrl.substring(5).startsWith(search);
            }

            return url.longUrl.startsWith(search);
          })
          .map((url) => (
            <li
              key={url.slug}
              className={`w-full h-[100px] flex flex-col space-y-2 justify-center rounded font-normal md:w-[376px] ${
                url.slug === `/${slug}`
                  ? 'bg-[#F1F6FE] border-2 border-gdscBlue-300 p-[18px]'
                  : 'bg-white px-5'
              } `}
            >
              <Link
                to={`/detail${url.slug}`}
                className="text-xl font-medium w-60 truncate ... "
              >
                <span>{url.longUrl}</span>
              </Link>
              <span className="flex justify-between">
                <span className="text-base text-gdscGrey-700 w-32 overflow-clip ">
                  {url.slug}
                </span>
                <div className="flex space-x-2 lg:hidden">
                  <button
                    type="button"
                    aria-label="Copy Button"
                    className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  >
                    <CopyIcon />
                  </button>
                  <button
                    type="button"
                    aria-label="Edit Button"
                    className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  >
                    <EditIcon />
                  </button>
                  <button
                    type="button"
                    aria-label="Delete Button"
                    className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

MyUrl.propTypes = {
  slug: PropTypes.string,
};

MyUrl.defaultProps = {
  slug: null,
};
