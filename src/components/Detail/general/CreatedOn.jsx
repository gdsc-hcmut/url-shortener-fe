import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CreatedOnIcon } from 'assets/icons/create_on_icon.svg';

export default function CreatedOn({ createOn }) {
  const time = new Date(createOn);
  return (
    <div className="h-[116px] md:h-[100px] 3xl:h-32 3xl:w-[504px] md:w-[504px] lg:w-[312px] w-full py-7 md:py-3 3xl:py-7 px-5 flex justify-between bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscBlue-300 rounded flex justify-center items-center ">
        <CreatedOnIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscBlue-300 text-xl lg:text-lg 3xl:text-2xl font-normal truncate">
          <span className="hidden 3xl:inline">
            {`${new Intl.DateTimeFormat('en-US', {
              weekday: 'long',
            }).format(time)}`}
          </span>
          <span>{` ${time.getDate()}/${time.getMonth() + 1}`}</span>
          <span>{`/${time.getFullYear()}`}</span>
          <span>{` ${time.toLocaleTimeString()}`}</span>
        </span>
        <span className="w-fit font-normal text-base">Created on</span>
      </div>
    </div>
  );
}

CreatedOn.propTypes = {
  createOn: PropTypes.string.isRequired,
};
