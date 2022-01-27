import PropTypes from 'prop-types';
import React from 'react';

export default function MyUrl({ isDetailPage }) {
  return (
    <div
      className={`w-full bg-opacity-0 flex flex-col ${
        isDetailPage ? 'w-[376px] ' : ''
      }`}
    >
      <h1 className="font-normal text-[32px] leading-10">My URLs</h1>
      <select
        className={`w-40 h-11 rounded text-base text-gdscGrey-700 px-5 outline-none bg-white mt-2 self-end  ${
          isDetailPage ? 'absolute mt-1' : ''
        }`}
        name="sort-by"
        id="sort-by"
        defaultValue="most-clicked"
      >
        <option value="most-clicked">Most Clicked</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="less-clicked">Lest Clicked</option>
      </select>
      <input
        className="w-full h-14 bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 font-light"
        placeholder="Search your URL ..."
      />
    </div>
  );
}

MyUrl.propTypes = {
  isDetailPage: PropTypes.bool,
};

MyUrl.defaultProps = {
  isDetailPage: false,
};
