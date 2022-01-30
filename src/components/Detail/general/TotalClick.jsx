import React from 'react';

import { ReactComponent as TotalClickIcon } from 'assets/icons/total_click_icon.svg';

export default function TotalClick() {
  return (
    <div className="h-32 xl:w-full md:w-[504px] w-full py-7 px-5 flex justify-between bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscGreen-300 rounded flex justify-center items-center ">
        <TotalClickIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscGreen-300 text-2xl font-normal truncate">
          Tuesday,27/10/2021 21:56:01
        </span>
        <span className="w-fit font-normal text-base">Expire Time</span>
      </div>
    </div>
  );
}
