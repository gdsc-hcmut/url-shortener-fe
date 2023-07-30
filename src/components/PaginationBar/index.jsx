import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import LeftArrowIcon from 'assets/icons/arrow_left.svg';
import RightArrowIcon from 'assets/icons/arrow_right.svg';
import DoubleLeftArrowIcon from 'assets/icons/double_left_arrow.svg';
import DoubleRightArrowIcon from 'assets/icons/double_right_arrow.svg';
import HideIcon from 'assets/icons/three_dots.svg';

export default function PaginationBar({ page, setPage, maxPage }) {
  const numberOfPageView = maxPage > 5 ? 5 : maxPage;
  const [leftMostPage, setLeftMostPage] = useState(1);
  const [isShownNext5Page, setIsShownNext5Page] = useState(false);
  const [isShownPrev5Page, setIsShownPrev5Page] = useState(false);

  useEffect(() => {
    if (page <= 2) {
      setLeftMostPage(1);
    } else if (page + 2 > maxPage) {
      setLeftMostPage(maxPage - numberOfPageView + 1);
    } else {
      setLeftMostPage(page - 2);
    }
  }, [page]);

  const paginationBar = () => {
    const pageList = [];
    for (
      let track = leftMostPage;
      track <= leftMostPage + numberOfPageView - 1;
      track += 1
    ) {
      if (track !== 1 && track !== maxPage) {
        pageList.push(
          <button
            type="button"
            className={`w-10 h-10 flex items-center justify-center rounded-[8px] mr-[18px] cursor-pointer bg-transparent hover:bg-gdscBlue-50 hover:text-gdscBlue-300 ${
              page === track
                ? 'text-gdscBlue-300 border border-gdscBlue-300'
                : 'text-gdscGrey-800'
            }`}
            onClick={() => setPage(track)}
          >
            {track}
          </button>,
        );
      }
    }
    return pageList;
  };

  return (
    <div className="h-12 flex flex-row items-center justify-center p-2 text-base">
      {page > 1 ? (
        <button
          type="button"
          className="flex flex-row justify-center items-center p-1 mr-[18px] cursor-pointer"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          <img
            src={LeftArrowIcon}
            className="h-[16px] w-[16px] fill-gdscBlue-300 opacity-80"
            alt="left arrow icon"
          />
        </button>
      ) : (
        ''
      )}
      <button
        type="button"
        className={`w-10 h-10 flex items-center justify-center rounded-[8px] mr-[18px] cursor-pointer bg-transparent hover:bg-gdscBlue-50 hover:text-gdscBlue-300 ${
          page === 1
            ? 'text-gdscBlue-300 border border-gdscBlue-300'
            : 'text-gdscGrey-800'
        }`}
        onClick={() => setPage(1)}
      >
        {1}
      </button>
      {leftMostPage > 2 ? (
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center rounded-[8px] mr-[18px] cursor-pointer"
          onMouseEnter={() => setIsShownPrev5Page(true)}
          onMouseLeave={() => setIsShownPrev5Page(false)}
        >
          {isShownPrev5Page ? (
            <button
              type="button"
              className="relative w-full h-full flex items-center justify-center"
              onClick={() => setPage(page >= 6 ? page - 5 : 1)}
            >
              <img
                src={DoubleLeftArrowIcon}
                className="h-[16px] w-[12px]"
                alt="double left arrow icon"
              />
              <span className="absolute p-[8px] top-[100%] left-[100%] border border-black bg-white rounded-[8px] whitespace-nowrap text-[14px]">
                Previous 5 pages
              </span>
            </button>
          ) : (
            <span className="w-full h-full flex items-center justify-center">
              <img src={HideIcon} alt="hide icon" />
            </span>
          )}
        </button>
      ) : (
        ''
      )}
      {paginationBar()}
      {leftMostPage + numberOfPageView < maxPage ? (
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center rounded-[8px] mr-[18px] cursor-pointer"
          onMouseEnter={() => setIsShownNext5Page(true)}
          onMouseLeave={() => setIsShownNext5Page(false)}
        >
          {isShownNext5Page ? (
            <button
              type="button"
              className="relative w-full h-full flex items-center justify-center"
              onClick={() => setPage(page + 5 <= maxPage ? page + 5 : maxPage)}
            >
              <img
                src={DoubleRightArrowIcon}
                className="h-[16px] w-[12px]"
                alt="double left arrow icon"
              />
              <span className="absolute p-[8px] top-[100%] left-[100%] border border-black bg-white rounded-[8px] whitespace-nowrap text-[14px]">
                Next 5 pages
              </span>
            </button>
          ) : (
            <span className="w-full h-full flex items-center justify-center">
              <img src={HideIcon} alt="hide icon" />
            </span>
          )}
        </button>
      ) : (
        ''
      )}
      {maxPage > 1 ? (
        <button
          type="button"
          className={`w-10 h-10 flex items-center justify-center rounded-[8px] mr-[18px] cursor-pointer bg-transparent hover:bg-gdscBlue-50 hover:text-gdscBlue-300 ${
            page === maxPage
              ? 'text-gdscBlue-300 border border-gdscBlue-300'
              : 'text-gdscGrey-800'
          }`}
          onClick={() => setPage(maxPage)}
        >
          {maxPage}
        </button>
      ) : (
        ''
      )}
      {page < maxPage ? (
        <button
          type="button"
          className="flex justify-center items-center p-1 text-gray-500 cursor-pointer"
          disabled={page >= maxPage}
          onClick={() => setPage(page + 1)}
        >
          <img
            src={RightArrowIcon}
            className="h-[16px] w-[16px]"
            opacity="0.87"
            alt="right arrow icon"
          />
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

PaginationBar.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  maxPage: PropTypes.func.isRequired,
};
