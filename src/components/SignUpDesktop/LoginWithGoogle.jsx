import React from 'react';

import GoogleLogo from 'assets/icons/GoogleLogo.svg';

export default function LoginWithGoogle() {
  return (
    <button
      type="button"
      className="w-[260px] h-[44px] self-center
      border rounded-[8px] border-gdscGrey-200 text-gdscGrey-700 font-bold
      flex justify-center items-center hover:bg-sign-in-with-google hover:border-[#FCEAE9] transition-all ease-out duration-300"
    >
      <img className="w-4 h-4 mr-2" src={GoogleLogo} alt="Google Icon" />
      Sign in with Google
    </button>
  );
}
