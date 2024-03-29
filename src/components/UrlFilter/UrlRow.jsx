import PropTypes from 'prop-types';
import React from 'react';

import AddToBlackListIcon from 'assets/icons/add_to_blacklist.svg';
import GraphIcon from 'assets/icons/graph_icon.svg';
import LimitDomainIcon from 'assets/icons/limit_domain_icon.svg';
import MoreInfoIcon from 'assets/icons/more-info.svg';

export default function UrlRow({ url, addUrlToBlacklist, setUrl }) {
  const time = new Date(url.createdAt);

  return (
    <tr
      className={`h-14 w-full flex aligns-center flex-row border-0 mb-2 rounded-[8px] text-base hover:bg-gdscBlue-50 hover:text-gdscBlue-300 ${
        url.isSuspected
          ? 'bg-[#FEE9E9] text-black'
          : 'bg-transparent text-gdscGrey-800'
      }`}
      key={url.id}
    >
      <th className="flex items-center justify-center w-[90px] font-normal">
        <img
          src={GraphIcon}
          className="w-7 h-7 mr-2 fill-gdscGreen-300"
          alt="graph increase icon"
        />
        <p className="text-gdscGreen-300">2</p>
      </th>
      <th className="h-14 w-[536px] max-w-[536px] py-[18px] text-left pr-[36px] truncate font-normal">
        {url.longUrl}
      </th>
      <th className="py-[18px] justify-center w-[208px] truncate font-normal">
        {url.organization}
      </th>
      <th className="py-[18px] justify-center w-[182px] truncate font-normal">
        {` ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`}
      </th>
      <th className="py-[18px] justify-center w-[192px] truncate font-normal">
        {url.size}
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
          onClick={() => setUrl(url.id)}
          className="relative w-[32px] h-[32px] flex items-center justify-center cursor-pointer bg-[#1967D2] bg-opacity-10 rounded-[8px] overflow-hidden hover:overflow-visible hover:bg-gdscBlue-100"
        >
          <img
            src={MoreInfoIcon}
            alt="more information icon"
            className="w-[6px] h-[16px] fill-gdscBlue-300"
            opacity="0.87"
          />
          <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
            More information
          </span>
        </button>
      </th>
    </tr>
  );
}

UrlRow.propTypes = {
  url: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.number,
  ).isRequired,
  addUrlToBlacklist: PropTypes.func.isRequired,
  setUrl: PropTypes.func,
};

UrlRow.defaultProps = {
  setUrl: (id) => console.log('>>> id: ', id),
};
