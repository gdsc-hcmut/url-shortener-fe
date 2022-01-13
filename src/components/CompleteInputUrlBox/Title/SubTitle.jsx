import React from 'react';

export default function SubTitle() {
  return (
    <div className="md:mt-[2vh] flex flex-col md:items-center flex-end h-[1.527vh] space-y-[6px] md:flex-row md:space-x-[0.46875vw] md:space-y-0">
      <p className="text-[0.75rem] font-normal text-dim-gray">
        Want more details on your previous shortened link?
      </p>
      <button
        type="submit"
        className="md:m-0 w-[4.453rem] h-[1.2rem] b-[50px] bg-get-started-btn rounded-[60px] flex justify-center items-center hover:bg-get-started-btn-hover"
      >
        <div className="opacity-100 text-[0.643rem] font-normal text-royal-blue flex justify-center items-center">
          Get started
        </div>
      </button>
    </div>
  );
}
