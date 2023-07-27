import { CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import AddToBlackListIcon from 'assets/icons/add_to_blacklist.svg';
import GraphIcon from 'assets/icons/graph_icon.svg';
import LimitDomainIcon from 'assets/icons/limit_domain_icon.svg';
import MoreInfoIcon from 'assets/icons/more-info.svg';

export default function UrlRowDetail({
  url,
  addUrlToBlacklist,
  setUrl,
  isLoading,
}) {
  const time = new Date(url.createdAt);

  return (
    <tr
      className="h-[100px] text-[16px] w-full flex aligns-center flex-row border-0 mb-2 rounded-[8px] text-base hover:bg-gdscBlue-50 hover:text-gdscBlue-300 bg-gdscGrey-100 text-gdscGrey-800"
      key={url.id}
    >
      {isLoading ? (
        <div className="text-center justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <th className="flex items-center justify-center w-[90px] font-normal">
            <img
              src={GraphIcon}
              className="w-7 h-7 mr-2 fill-gdscGreen-300"
              alt="graph increase icon"
            />
            <p className="text-gdscGreen-300">2</p>
          </th>
          <th className="h-[100px] w-[536px] max-w-[536px] text-left pr-[36px] justify-center font-normal flex flex-col">
            <span className="truncate mb-[10px]">{url.longUrl}</span>
            <span>
              slug:
              {url.slug}
            </span>
          </th>
          {url.name ? (
            <th className="justify-center w-[336px] flex flex-col font-normal text-left">
              <span className="truncate mb-[8px]">
                Name:
                {url.name}
              </span>
              <span className="truncate mb-[8px]">
                Email:
                {url.email}
              </span>
              <span className="truncate">
                Organization:
                {url.organization}
              </span>
            </th>
          ) : (
            <th className="justify-center items-center flex flex-col w-[336px] font-normal">
              No owner
            </th>
          )}
          <th className="justify-center w-[246px] flex flex-col font-normal text-left">
            <span className="truncate mb-[8px]">
              Created at:
              {' '}
              {` ${time.getDate()}/${
                time.getMonth() + 1
              }/${time.getFullYear()}`}
            </span>
            <span className="truncate mb-[8px]">
              Total clicks:
              {' '}
              {url.totalClicks ? url.totalClicks.length : 0}
            </span>
            <span>
              Today Clicks:
              {' '}
              {url.totalClicks
                ? url.totalClicks.filter((click) => {
                  const today = new Date();
                  const dateClicked = new Date(click.dateClicked);
                  return (
                    today.getDate() === dateClicked.getDate()
                      && today.getMonth() === dateClicked.getMonth()
                      && today.getFullYear() === dateClicked.getFullYear()
                  );
                }).length
                : 0}
            </span>
          </th>
          <th className="flex items-center justify-center flex-row w-[148px] font-normal">
            <button
              type="button"
              className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer mr-[8px] bg-[#1967D2] bg-opacity-10 rounded-[8px] overflow-hidden hover:overflow-visible hover:bg-gdscBlue-100"
              onClick={() => addUrlToBlacklist(url.id)}
            >
              <img
                src={AddToBlackListIcon}
                alt="add to blacklist icon"
                className="w-[18px] h-[16px] fill-gdscBlue-300"
                opacity="0.87"
              />
              <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] rounded-[8px]">
                Add to blacklist
              </span>
            </button>
            <button
              type="button"
              className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer mr-[8px] bg-[#1967D2] bg-opacity-10 rounded-[8px] overflow-hidden hover:overflow-visible hover:bg-gdscBlue-100"
            >
              <img
                src={LimitDomainIcon}
                alt="limit domain icon"
                className="w-[16px] h-[16px] fill-gdscBlue-300"
                opacity="0.87"
              />
              <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
                Limit domain
              </span>
            </button>
            <button
              type="button"
              onClick={() => setUrl('')}
              className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#1967D2] bg-opacity-10 rounded-[8px] overflow-hidden hover:overflow-visible hover:bg-gdscBlue-100"
            >
              <img
                src={MoreInfoIcon}
                alt="more information icon"
                className="w-[6px] h-[16px] fill-gdscBlue-300"
                opacity="0.87"
              />
              <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
                Limit information
              </span>
            </button>
          </th>
        </>
      )}
    </tr>
  );
}

UrlRowDetail.propTypes = {
  url: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.number,
  ).isRequired,
  addUrlToBlacklist: PropTypes.func.isRequired,
  setUrl: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

UrlRowDetail.defaultProps = {
  isLoading: false,
};
