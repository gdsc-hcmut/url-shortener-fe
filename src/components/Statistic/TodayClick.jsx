import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as TodayClickIcon } from 'assets/icons/today_click_icon.svg';

export default function TodayClick({ todayClick }) {
  return (
    <div className="h-[116px] md:h-[128px] lg:w-[426px] w-full py-7 md:py-3 3xl:py-7 px-5 flex justify-between bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscYellow-300 rounded flex justify-center items-center ">
        <TodayClickIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscYellow-300 text-2xl font-normal truncate">
          {todayClick}
        </span>
        <span className="w-fit font-normal text-base">Today&apos;s Click</span>
      </div>
    </div>
  );
}

TodayClick.propTypes = {
  todayClick: PropTypes.number,
};
TodayClick.defaultProps = {
  todayClick: 0,
};
