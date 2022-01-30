import React from 'react';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';

export default function Chart() {
  return (
    <div className="md:h-[480px] h-[240px] xl:w-full md:w-[504px] w-full px-5 py-5 lg:px-8 flex flex-col space-y-3 md:space-y-7  bg-white rounded">
      <div className="flex justify-between">
        <h1>Times Clicked On</h1>
        <button
          type="button"
          className="w-40 h-11 text-base text-gdscGrey-700 p-2 lg:p-3 outline-none bg-[#F0F5F7] my-3 mx-0 self-end text-left cursor-pointer focus:outline-none rounded block md:mt-1 md:mr-3"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="flex items-center justify-between">
            <span className="truncate py-3">Last 6 Month</span>
            <span className="">
              <ArrowDown />
            </span>
          </span>
        </button>
      </div>
      <div className="bg-gdscRed-300 w-full h-full">Graph</div>
    </div>
  );
}
