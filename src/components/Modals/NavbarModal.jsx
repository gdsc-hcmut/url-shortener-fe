import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from 'actions/auth';
import AccountCircle from 'assets/icons/account_circle_blue.svg';
import LogoutIcon from 'assets/icons/logout.svg';

export default function NavbarModal({ show, onClose }) {
  const dispatch = useDispatch();
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
        className={`absolute right-[60px] top-[104px] z-50 w-[300px] h-[158px] pt-8 px-7 bg-white border rounded border-gdscGrey-300 ${
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
    </div>
  );
}
NavbarModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
