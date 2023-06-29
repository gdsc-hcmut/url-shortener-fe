import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as TotalClickIcon } from 'assets/icons/total_click_icon.svg';

export default function TotalClick({ totalClick }) {
  return (
    <div className="h-[116px] md:h-[100px] 3xl:h-32 3xl:w-[504px] md:w-[504px] lg:w-[312px] w-full py-7 md:py-3 3xl:py-7 px-5 flex justify-between bg-white shadow-lg border-t border-gdscGrey-100 rounded-[8px]">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscGreen-300 rounded flex justify-center items-center ">
        <TotalClickIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscGreen-300 text-2xl font-normal truncate">
          {totalClick}
        </span>
        <span className="w-fit font-normal text-base">Total Click</span>
      </div>
    </div>
  );
}

TotalClick.propTypes = {
  totalClick: PropTypes.number.isRequired,
};
