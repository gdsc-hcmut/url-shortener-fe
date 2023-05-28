import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { loginWithGoogle } from 'actions/auth';
import GoogleLogo from 'assets/icons/GoogleLogo.svg';

export default function GoogleLoginButton() {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(loginWithGoogle(res.tokenId));
  };

  const onFailure = () => {
    /* TODO */
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_CLIENT_ID,
    isSignedIn: false,
    accessType: 'offline',
  });

  return (
    <button
      onClick={signIn}
      className="text-gdscGrey-700 w-[260px] h-[44px]
            bg-white rounded border border-gdscGrey-200
            transition-all duration-300 ease-out mb-[120px] md:mb-7 font-bold
            hover:border-[#FCEAE9] hover:bg-[#FCEAE9]
            flex flex-row justify-center items-center"
      type="button"
    >
      <img
        className="w-[16px] h-[16px] mr-2"
        src={GoogleLogo}
        alt="Google Logo"
      />
      <span>Sign in with Google</span>
    </button>
  );
}
