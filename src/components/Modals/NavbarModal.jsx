import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from 'actions/auth';
import AccountCircle from 'assets/icons/account_circle_blue.svg';
import LogoutIcon from 'assets/icons/logout.svg';

export default function NavbarModal({ show }) {
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(logout());
  return (
    <div
      className={`absolute right-[60px] top-[104px] z-50 w-[300px] h-[158px] pt-8 px-7 bg-white border rounded border-gdscGrey-200 ${
        show ? 'block' : 'hidden'
      }`}
    >
      <Link to="/user-profile">
        <button
          type="button"
          className="w-[244px] h-[52px] bg-gdscBlue-100 bg-opacity-20 rounded flex items-center pl-6"
        >
          <img src={AccountCircle} alt="Account Circle" />
          <p className="text-gdscBlue-300 ml-4">My profile</p>
        </button>
      </Link>
      <Link
        to="/"
        role="button"
        onClick={handleSignOut}
        className="w-[244px] h-[52px] pl-5 flex items-center z-10 hover:bg-gdscRed-300/10 text-gdscRed-300 rounded transition-all duration-300 ease-out"
      >
        <img src={LogoutIcon} alt="Logout Icon" />
        <p className="ml-4">Logout</p>
      </Link>
    </div>
  );
}
NavbarModal.propTypes = {
  show: PropTypes.bool.isRequired,
};
