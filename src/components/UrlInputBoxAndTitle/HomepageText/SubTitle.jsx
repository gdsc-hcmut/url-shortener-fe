import React from 'react';

export default function SubTitle() {
  return (
    <div className="md:mb-0 md:mt-2 flex flex-col md:items-center flex-end md:h-6 space-y-1.5 md:flex-row md:space-x-4 md:space-y-0">
      <p className="text-base font-normal text-gdscGrey-700">
        Want more details on your previous shortened link?
      </p>
      <button
        type="submit"
        className="md:m-0 w-[88px] md:w-[92px] h-[24px] b-[50px] bg-get-started-btn rounded-[60px] flex justify-center items-center hover:bg-get-started-btn-hover  ease-out duration-300"
      >
        <div className="opacity-100 text-xs font-normal text-gdscBlue-300 flex justify-center items-center">
          Get started
        </div>
      </button>
    </div>
  );
}
