import React from 'react';

import GoogleLogo from 'assets/icons/GoogleLogo.svg';

export default function LoginWithGoogle() {
  return (
    <div className=" flex flex-col items-center">
      <div className="block text-center overflow-hidden whitespace-nowrap">
        <hr className="inline-block w-[158px] h-[1px]" />
        <span className="inline-block w-[40px] h-[40px]">or</span>
        <hr className="inline-block w-[158px] h-[1px]" />
      </div>
      <button
        className="text-gdscGrey-700 w-[260px] h-[44px]
                  bg-white rounded border border-gdscGrey-200
                  transition-all duration-300 ease-out mb-7 font-bold
                  hover:border-[#FCEAE9] hover:bg-[#FCEAE9]
                  flex flex-row justify-center items-center"
        type="submit"
      >
        <img
          className="w-[16px] h-[16px] mr-2"
          src={GoogleLogo}
          alt="Google Logo"
        />
        {' Log In with Google'}
      </button>
    </div>
  );
}
