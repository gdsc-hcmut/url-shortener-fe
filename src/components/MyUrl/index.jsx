import React, { useState } from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';

export default function MyUrl() {
  const [option, setOption] = useState('Most Clicked');
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = ['Most Clicked', 'Less Clicked', 'Latest', 'Oldest'];
  const testArray = [...Array(20).keys()];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-opacity-0 flex flex-col md:w-[392px] h-full w-full md:pr-0 md:p-0 py-5 pr-5">
      <h1 className="font-normal text-[32px] leading-10">My URLs</h1>

      <button
        type="button"
        className="z-10 w-40 h-11 text-base text-gdscGrey-700 px-5 outline-none bg-white my-3 mx-0 self-end text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-gdscBlue-300 focus:border-gdscBlue-300 rounded block lg:absolute md:mt-1 md:mr-3"
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
              <button
                key={el}
                type="button"
                className="block"
                onClick={() => {
                  setOption(el);
                  setIsOpen(false);
                }}
              >
                {el}
              </button>
            ))}
        </div>
      </button>

      <input
        className="w-full h-14 bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 font-light md:w-[376px] relative"
        placeholder="Search your URL ..."
      />
      <ul className="md:overflow-y-scroll mt-10 space-y-10 relative h-full ">
        {testArray.map((el) => (
          <li
            key={el}
            className="w-full h-[100px] p-5 flex flex-col justify-between rounded bg-white font-normal md:w-[376px] cursor-pointer"
          >
            <span className="text-xl font-medium w-60 truncate ... ">
              https://github.com/gdsc-hcmut/url-shortener-fe/pull/8
            </span>
            <span className="text-base text-gdscGrey-700 w-32 overflow-clip ">
              /slug
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
