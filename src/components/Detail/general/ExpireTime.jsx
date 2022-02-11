import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as EditExpireIcon } from 'assets/icons/edit_expire_icon.svg';
import { ReactComponent as ExpireTimeIcon } from 'assets/icons/expire_time_icon.svg';
import { DATE } from 'constant/dateName';

export default function ExpireTime({ expireTime }) {
  const time = new Date(expireTime);
  return (
    <div className="h-[116px] md:h-32 md:w-[504px] w-full py-7 px-5 flex justify-between mx-0 bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscRed-300 rounded flex justify-center items-center ">
        <ExpireTimeIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscRed-300 text-xl md:text-2xl font-normal truncate">
          <span className="hidden md:inline">{DATE[time.getDay()]}</span>
          {` ${time.getDate()}/${
            time.getMonth() + 1
          }/${time.getFullYear()} ${time.toLocaleTimeString()}`}
        </span>
        <span className="font-normal text-base inline-flex justify-center items-center">
          Expire Time
          <span className="ml-4 w-[100px] h-7 rounded-[60px] flex justify-center items-center px-7 bg-[#DA4436] bg-opacity-10 active:bg-opacity-20 hover:cursor-pointer">
            <span className="inline-flex w-full justify-between items-center">
              <span className="text-base text-gdscRed-300">Edit</span>
              <EditExpireIcon />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

ExpireTime.propTypes = {
  expireTime: PropTypes.string.isRequired,
};
