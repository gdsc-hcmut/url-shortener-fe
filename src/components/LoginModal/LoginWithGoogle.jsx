import React from 'react';

import GoogleLoginButton from './GoogleLoginButton';

export default function LoginWithGoogle() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-10 self-center flex items-center">
        <div className="w-[170px] h-px bg-gdscGrey-200 mr-1" />
        or
        <div className="w-[170px] h-px bg-gdscGrey-200 ml-1" />
      </div>
      <GoogleLoginButton />
    </div>
  );
}
