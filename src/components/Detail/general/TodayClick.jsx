import React from 'react';

import { ReactComponent as TodayClickIcon } from 'assets/icons/today_click_icon.svg';

export default function TodayClick() {
  return (
    <div className="h-32 2xl:w-full md:w-[504px] w-full py-7 px-5 flex justify-between mx-0 lg:mr-6 mb-6 bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscYellow-300 rounded flex justify-center items-center ">
        <TodayClickIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscYellow-300 text-2xl font-normal">123</span>
        <span className="w-fit font-normal text-base">Today&apos;s Click</span>
      </div>
    </div>
  );
}
