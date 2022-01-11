import React from 'react';

export default function SubTitle() {
  return (
    <div className="flex flex-col space-y-[6px] md:flex-row md:space-x-[9px] md:space-y-0">
      <p className="text-[15px] font-normal">
        Want more details on your previous shortened link?
      </p>
      <button
        type="submit"
        className="w-[5.625rem] h-[1.563rem] bg-get-started-btn rounded-[60px] flex justify-center items-center hover:bg-get-started-btn-hover"
      >
        <div className="opacity-100 text-[13px] font-normal text-royal-blue flex justify-center items-center">
          Get started
        </div>
      </button>
    </div>
  );
}
