/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from 'actions/auth';
import { ReactComponent as AccountCircle } from 'assets/icons/account_circle.svg';
import LogoutIcon from 'assets/icons/logout.svg';

import GoogleLogoutButton from './GoogleLogoutButton';

export default function NavbarModal({ show, onClose }) {
  const dispatch = useDispatch();
  const loggedInWithGoogle = useSelector(
    (state) => state.auth.loggedInWithGoogle,
  );

  const handleSignOut = () => dispatch(logout());

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  return (
    <div
      aria-hidden="true"
      className={`absolute z-50 hidden inset-0 md:flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        className={`absolute right-[60px] top-[104px] z-50 w-[300px] py-8 px-7 bg-white border rounded border-gdscGrey-300 ${
          show ? 'block' : 'hidden'
        }`}
      >
        <Link to="/profile">
          <button
            type="button"
            className="relative w-[244px] h-[52px] text-gdscGrey-700 hover:text-gdscBlue-300 bg-white hover:bg-gdscBlue-100 hover:bg-opacity-20 rounded flex items-center pl-5 transition duration-300 ease-out"
          >
            <AccountCircle />
            <p className="ml-4">My profile</p>
          </button>
        </Link>
        {loggedInWithGoogle ? (
          <GoogleLogoutButton />
        ) : (
          <Link
            to="/"
            role="button"
            onClick={handleSignOut}
            className="realtive w-[244px] h-[52px] pl-5 flex items-center z-10 hover:bg-gdscRed-300/10 text-gdscRed-300 rounded transition-all duration-300 ease-out"
          >
            <img src={LogoutIcon} alt="Logout Icon" />
            <p className="ml-4">Logout</p>
          </Link>
        )}
      </div>
    </div>
  );
}

NavbarModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
