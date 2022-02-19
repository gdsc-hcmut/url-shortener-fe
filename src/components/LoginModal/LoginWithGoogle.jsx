import React from 'react';

import GoogleLogo from 'assets/icons/GoogleLogo.svg';

export default function LoginWithGoogle() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-10 self-center flex items-center">
        <div className="w-[170px] h-px bg-gdscGrey-200 mr-1" />
        or
        <div className="w-[170px] h-px bg-gdscGrey-200 ml-1" />
      </div>
      <button
        className="text-gdscGrey-700 w-[260px] h-[44px]
                  bg-white rounded border border-gdscGrey-200
                  transition-all duration-300 ease-out mb-[120px] md:mb-7 font-bold
                  hover:border-[#FCEAE9] hover:bg-[#FCEAE9]
                  flex flex-row justify-center items-center"
        type="submit"
      >
        <img
          className="w-[16px] h-[16px] mr-2"
          src={GoogleLogo}
          alt="Google Logo"
        />
        Sign in with Google
      </button>
    </div>
  );
}
