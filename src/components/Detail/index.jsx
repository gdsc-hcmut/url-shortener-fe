import React from 'react';

import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';

import Chart from './Chart';
import CreatedOn from './general/CreatedOn';
import ExpireTime from './general/ExpireTime';
import TodayClick from './general/TodayClick';
import TotalClick from './general/TotalClick';
import QR from './QR';
import SocialMedia from './SocialMedia';

export default function Detail() {
  return (
    <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:pr-[60px] md:p-0 py-5 pr-5">
      <h1 className="font-normal w-[376px] 2xl:w-[860px] text-[32px] no-scrollbar mb-4 uppercase truncate">
        https://longlinkaaaaa.com/asdfaklsjdhfkjasdhflaskjdflk
      </h1>
      <div className="mb-[60px] flex">
        <h1 className="inline font-normal w-[216px] h-8 leading-8 text-xl mr-8">
          gdschcmut.url/ai-series
        </h1>
        <div className="flex space-x-2">
          <button
            type="button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
          >
            <CopyIcon />
          </button>
          <button
            type="button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
          >
            <EditIcon />
          </button>
          <button
            type="button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="inline-flex flex-wrap gap-6 mb-6 ">
          <ExpireTime />
          <CreatedOn />
          <TodayClick />
          <TotalClick />
        </div>
        <div className="flex flex-col border-x-lime-400:flex-row mb-6">
          <SocialMedia />
          <QR />
        </div>
        <Chart />
      </div>
    </div>
  );
}
