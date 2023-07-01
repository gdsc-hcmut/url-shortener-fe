import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';

import AddToBlackListIcon from 'assets/icons/add_to_blacklist.svg';
import GraphIcon from 'assets/icons/graph_icon.svg';
import LimitDomainIcon from 'assets/icons/limit_domain_icon.svg';
import MoreInfoIcon from 'assets/icons/more-info.svg';

export default function UrlShow({ url, deleteUrl }) {
  const navigate = useNavigate();

  return (
    <div
      className=" h-14 w-full flex aligns-center flex-row border border-gray-100 mb-2 rounded-[8px] text-base hover:bg-gdscBlue-50 hover:text-gdscBlue-300"
      key={url.id}
    >
      <div className="flex items-center justify-center w-[90px]">
        <img
          src={GraphIcon}
          className="w-7 h-7 mr-2 fill-gdscGreen-300"
          alt="graph icon increase"
        />
        <p className="text-gdscGreen-300">2</p>
      </div>
      <div className="relative h-14 w-[500px] flex items-center text-left mr-[36px] truncate">
        {url.link}
      </div>
      <p className="inline-flex items-center justify-left w-[168px] mr-[40px] truncate">
        {url.org}
      </p>
      <div className="inline-flex items-center justify-center w-[162px] mr-[20px] truncate">
        {url.date}
      </div>
      <div className="flex items-center justify-center w-[172px] mr-[20px] truncate">
        {url.totalClicks}
      </div>
      <div className="flex items-center justify-center flex-row w-[148px]">
        <button
          type="button"
          className="relative w-[24px] h-[24px] flex items-center justify-center cursor-pointer mr-4 bg-[#D5E1F5] rounded-[8px] overflow-hidden hover:overflow-visible"
        >
          <img
            src={AddToBlackListIcon}
            alt="add-to-blacklist"
            className="w-[16px] h-[12px] fill-gdscBlue-300"
            opacity="0.87"
          />
          <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] rounded-[8px]">
            Add to blacklist
          </span>
        </button>
        <button
          type="button"
          onClick={() => deleteUrl(url)}
          className="relative w-[24px] h-[24px] flex items-center justify-center cursor-pointer mr-4 bg-[#D5E1F5] rounded-[8px] overflow-hidden hover:overflow-visible"
        >
          <img
            src={LimitDomainIcon}
            alt="limit-domain"
            className="w-[14px] h-[14px] fill-gdscBlue-300"
            opacity="0.87"
          />
          <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
            Limit domain
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            navigate(`/url-filter/${url.id}`, {
              state: { id: url.id, name: url.link },
            });
          }}
          className="relative w-[24px] h-[24px] flex items-center justify-center cursor-pointer bg-[#D5E1F5] rounded-[8px] overflow-hidden hover:overflow-visible"
        >
          <img
            src={MoreInfoIcon}
            alt="more-information"
            className="w-[4px] h-[12px] fill-gdscBlue-300"
            opacity="0.87"
          />
          <span className="inline-block absolute w-[120px] h-auto bg-black text-white text-center text-[12px] py-[2px] z-2 bottom-[150%] border border-gdscGrey-500 rounded-[8px]">
            More information
          </span>
        </button>
      </div>
    </div>
  );
}

UrlShow.propTypes = {
  url: PropTypes.objectOf(Object.PropTypes).isRequired,
  deleteUrl: PropTypes.func.isRequired,
};
