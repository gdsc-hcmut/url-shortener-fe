import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import AccountCircle from 'assets/icons/account_circle.svg';
import LogoutIcon from 'assets/icons/logout.svg';

export default function NavbarModal({ show }) {
  return (
    <div
      className={`w-[300px] h-[158px] pt-8 px-7 self-end mr-[60px] mt-[-28px] bg-white border rounded border-gdscGrey-200 flex flex-col items-start opacity-0 ${
        show ? 'opacity-100' : ' '
      }`}
    >
      <button
        type="button"
        className="w-[244px] h-[52px] bg-gdscBlue-100 bg-opacity-20 rounded flex items-center pl-5"
      >
        <img src={AccountCircle} alt="Account Circle" />
        <p className="text-gdscBlue-300 ml-4">My profile</p>
      </button>
      <Link
        to="/"
        role="button"
        className="w-[244px] h-[52px] pl-5 flex items-center z-10"
      >
        <img src={LogoutIcon} alt="Logout Icon" />
        <p className="ml-4 text-gdscRed-300">Logout</p>
      </Link>
    </div>
  );
}
NavbarModal.propTypes = {
  show: PropTypes.bool.isRequired,
};
