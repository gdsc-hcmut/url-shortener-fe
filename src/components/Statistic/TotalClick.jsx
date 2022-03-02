import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as TotalClickIcon } from 'assets/icons/total_click_icon.svg';

export default function TotalClick({ totalClick }) {
  return (
    <div className="h-[116px] md:h-[128px] lg:w-[426px] w-full py-7 md:py-3 3xl:py-7 px-5 flex justify-between bg-white rounded">
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
  totalClick: PropTypes.number,
};

TotalClick.defaultProps = {
  totalClick: 0,
};
