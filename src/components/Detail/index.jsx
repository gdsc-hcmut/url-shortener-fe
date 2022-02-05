import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import fakeGetUrlsList from 'services/getUrlsList';

import Chart from './Chart';
import CreatedOn from './general/CreatedOn';
import ExpireTime from './general/ExpireTime';
import TodayClick from './general/TodayClick';
import TotalClick from './general/TotalClick';
import QR from './QR';
import SocialMedia from './SocialMedia';

export default function Detail({ slug }) {
  const urlDetail = _.find(fakeGetUrlsList, { slug: `/${slug}` });
  return (
    <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:p-0 py-5 pr-5">
      <h1 className="font-normal w-screen sm:w-[376px] 3xl:w-[860px] text-[32px] no-scrollbar mb-4 uppercase truncate">
        {urlDetail.longUrl}
      </h1>
      <div className="mb-[60px] flex">
        <h1 className="inline font-normal w-[216px] h-8 leading-8 text-xl mr-8 truncate">
          gdschcmut.url
          {urlDetail.slug}
        </h1>
        <div className="flex space-x-2">
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
      </div>
      <div className="flex flex-col ">
        <div className="inline-flex flex-wrap gap-6 mb-6 ">
          <ExpireTime expireTime={urlDetail.expireTime.toString()} />
          <CreatedOn createOn={urlDetail.createOn.toString()} />
          <TodayClick todayClick={_.last(urlDetail.click)} />
          <TotalClick
            totalClick={Object.values(urlDetail.total).reduce(
              (sum, el) => sum + el,
            )}
          />
        </div>
        <div className="flex flex-col 3xl:flex-row border-x-lime-400:flex-row mb-6 3xl:mb-0">
          <SocialMedia data={urlDetail.total} />
          <QR />
        </div>
        <Chart data={urlDetail.click} />
      </div>
    </div>
  );
}

Detail.propTypes = {
  slug: PropTypes.string,
};

Detail.defaultProps = {
  slug: null,
};
