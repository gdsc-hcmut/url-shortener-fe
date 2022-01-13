import React from 'react';

export default function SubTitle() {
  return (
    <div className="mb-[23px] md:mb-0 md:mt-[2vh] flex flex-col md:items-center flex-end h-[1.527vh] space-y-[6px] md:flex-row md:space-x-[0.46875vw] md:space-y-0">
      <p className="text-[0.75rem] font-normal text-gdscGrey-700">
        Want more details on your previous shortened link?
      </p>
      <button
        type="submit"
        className="md:m-0 w-[5.625rem] h-[1.563rem] b-[50px] bg-get-started-btn rounded-[60px] flex justify-center items-center hover:bg-get-started-btn-hover  ease-out duration-300"
      >
        <div className="opacity-100 text-[0.643rem] font-normal text-gdscBlue-300 flex justify-center items-center">
          Get started
        </div>
      </button>
    </div>
  );
}
