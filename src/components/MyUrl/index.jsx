import PropTypes from 'prop-types';
import React from 'react';

export default function MyUrl({ isDetailPage }) {
  const testArray = new Array(20).fill(0);
  return (
    <div
      className={`bg-opacity-0 flex flex-col ${
        isDetailPage ? 'w-[392px] h-full' : 'w-full '
      }`}
    >
      <h1 className="font-normal text-[32px] leading-10">My URLs</h1>
      <select
        className={`w-40 h-11 rounded text-base text-gdscGrey-700 px-5 outline-none bg-white mt-2 self-end  ${
          isDetailPage ? 'absolute mt-1 mr-3' : ''
        }`}
        name="sort-by"
        id="sort-by"
        defaultValue="most-clicked"
      >
        <option value="most-clicked">Most Clicked</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="least-clicked">Least Clicked</option>
      </select>
      <input
        className={`w-full h-14 bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 font-light ${
          isDetailPage ? 'w-[376px]' : ''
        }`}
        placeholder="Search your URL ..."
      />
      <div className="overflow-y-scroll mt-10 space-y-10 relative h-full scroll-">
        {testArray.map((key) => (
          <div
            key={key}
            className={`w-full h-[100px] p-5 flex flex-col justify-between rounded bg-white font-normal ${
              isDetailPage ? 'w-[376px] ' : ''
            }`}
          >
            <span className="text-xl font-medium w-60 truncate ... ">
              https://github.com/gdsc-hcmut/url-shortener-fe/pull/8
            </span>
            <span className="text-base text-gdscGrey-700 w-32 overflow-clip ">
              /slug
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

MyUrl.propTypes = {
  isDetailPage: PropTypes.bool,
};

MyUrl.defaultProps = {
  isDetailPage: false,
};
