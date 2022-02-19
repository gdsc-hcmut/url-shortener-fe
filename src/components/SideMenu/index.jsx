import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from 'actions/auth';
import { ReactComponent as AccountCircle } from 'assets/icons/account_circle.svg';
import { ReactComponent as LinkIcon } from 'assets/icons/link_icon.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock_icon.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout_icon.svg';
import { ReactComponent as StatIcon } from 'assets/icons/stat_icon.svg';

export default function SideMenu({ toggle, page }) {
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(logout());
  useEffect(() => {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('-translate-x-full');
  }, [toggle]);

  return (
    <div
      className="side-menu min-h-screen w-full bg-white text-gdscGrey-700 fixed md:relative 2xl:w-[360px] md:w-fit
                border-gdscGrey-100 md:py-16 2xl:px-[60px] xl:px-[36px] lg:px-[28px] py-7 px-5
                transform  md:translate-x-0 transition duration-300 ease-out z-30"
    >
      <div>
        <NavLink
          to="/profile"
          className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'my-profile'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'my-profile'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
        >
          <AccountCircle />
          <span>My Profile</span>
        </NavLink>
        <NavLink
          to="/urls"
          className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'detail' || page === 'urls'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'detail' || page === 'urls'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
        >
          <LinkIcon />
          <span>My URLs</span>
        </NavLink>
        <NavLink
          to="/statistics"
          className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'stat' ? 'bg-gdscBlue-300/10' : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'stat' ? 'text-gdscBlue-300' : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
        >
          <StatIcon />
          <span>Statistics</span>
        </NavLink>
        <NavLink
          to="/change-pass"
          className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'change-pass'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'change-pass'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
        >
          <LockIcon />
          <span>Change Password</span>
        </NavLink>
        <NavLink
          to="/"
          onClick={handleSignOut}
          className="logOut flex flex-row space-x-4 min-w-full md:w-[240px] items-center
            md:h-[52px] h-[58px] px-5 rounded bg-white
            hover:bg-gdscRed-300/10 cursor-pointer
            text-gdscRed-300 transition-all
            ease-out duration-300"
        >
          <LogoutIcon color="#DB4437" />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  toggle: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
};
