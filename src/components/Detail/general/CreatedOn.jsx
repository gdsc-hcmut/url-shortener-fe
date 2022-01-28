import React from 'react';

import { ReactComponent as CreatedOnIcon } from 'assets/icons/create_on_icon.svg';

export default function CreatedOn() {
  return (
    <div className="h-32 2xl:w-full md:w-[504px] w-full py-7 px-5 flex justify-between bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscBlue-300 rounded flex justify-center items-center ">
        <CreatedOnIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscBlue-300 text-2xl font-normal">
          Tuesday,27/10/2021 21:56:01
        </span>
        <span className="w-fit font-normal text-base">Created on</span>
      </div>
    </div>
  );
}
