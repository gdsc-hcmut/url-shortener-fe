import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from 'actions/auth';
import LogoutIcon from 'assets/icons/logout.svg';

export default function GoogleLogoutButton() {
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logout());
  };

  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_CLIENT_ID,
    onLogoutSuccess,
  });

  return (
    <Link
      to="/"
      role="button"
      onClick={signOut}
      className="realtive w-[244px] h-[52px] pl-5 flex items-center z-10 hover:bg-gdscRed-300/10 text-gdscRed-300 rounded transition-all duration-300 ease-out"
    >
      <img src={LogoutIcon} alt="Logout Icon" />
      <p className="ml-4 text-gdscRed-300">Logout</p>
    </Link>
  );
}
