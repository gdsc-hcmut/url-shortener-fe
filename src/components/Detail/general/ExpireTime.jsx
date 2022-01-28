import React from 'react';

import { ReactComponent as EditExpireIcon } from 'assets/icons/edit_expire_icon.svg';
import { ReactComponent as ExpireTimeIcon } from 'assets/icons/expire_time_icon.svg';

export default function ExpireTime() {
  return (
    <div className="h-32 2xl:w-full md:w-[504px] w-full py-7 px-5 flex justify-between mx-0 lg:mr-6 mb-6 bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscRed-300 rounded flex justify-center items-center ">
        <ExpireTimeIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscRed-300 text-2xl font-normal">
          Tuesday,27/10/2021 21:56:01
        </span>
        <span className="font-normal text-base flex justify-center items-center">
          Expire Time
          <div className="ml-4 w-[100px] h-7 flex justify-center items-center rounded bg-[#DA4436] bg-opacity-10 active:bg-opacity-20">
            Edit
            <EditExpireIcon />
          </div>
        </span>
      </div>
    </div>
  );
}
