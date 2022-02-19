import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CreatedOnIcon } from 'assets/icons/create_on_icon.svg';

export default function CreatedOn({ createOn }) {
  const time = new Date(createOn);
  return (
    <div className="h-[116px] md:h-32 md:w-[504px] w-full py-7 px-5 flex justify-between bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscBlue-300 rounded flex justify-center items-center ">
        <CreatedOnIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscBlue-300 text-xl sm:text-2xl font-normal truncate">
          <span className="hidden md:inline">
            {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(time)}
          </span>
          {` ${time.getDate()}/${
            time.getMonth() + 1
          }/${time.getFullYear()} ${time.toLocaleTimeString()}`}
        </span>
        <span className="w-fit font-normal text-base">Created on</span>
      </div>
    </div>
  );
}

CreatedOn.propTypes = {
  createOn: PropTypes.string.isRequired,
};
