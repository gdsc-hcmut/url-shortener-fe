import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { loginWithGoogle } from 'actions/auth';
import GoogleLogo from 'assets/icons/GoogleLogo.svg';

export default function LoginWithGoogle() {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(loginWithGoogle(res.tokenId));
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    clientId: process.env.REACT_APP_CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button
      onClick={signIn}
      type="button"
      className="w-[260px] h-[44px] self-center
      border rounded-[8px] border-gdscGrey-200 text-gdscGrey-700 font-bold mb-[120px] md:mb-3
      flex justify-center items-center hover:bg-sign-in-with-google hover:border-[#FCEAE9] transition-all ease-out duration-300"
    >
      <img className="w-4 h-4 mr-2" src={GoogleLogo} alt="Google Icon" />
      Sign in with Google
    </button>
  );
}
