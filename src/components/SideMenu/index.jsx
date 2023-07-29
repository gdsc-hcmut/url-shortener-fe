import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from 'actions/auth';
import { ReactComponent as AccountCircle } from 'assets/icons/account_circle.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter_list.svg';
import { ReactComponent as LinkIcon } from 'assets/icons/link_icon.svg';
import { ReactComponent as ListIcon } from 'assets/icons/list.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock_icon.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout_icon.svg';
import { ReactComponent as StatIcon } from 'assets/icons/stat_icon.svg';
import GoogleLogoutButton from 'components/Modals/GoogleLogoutButton';

export default function SideMenu({ toggle, page }) {
  const isAdmin = JSON.parse(localStorage.getItem('is_admin') || 'false');
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(logout());
  const loggedInWithGoogle = useSelector(
    (state) => state.auth.loggedInWithGoogle,
  );

  useEffect(() => {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('-translate-x-full');
  }, [toggle]);

  return (
    <div
      className="side-menu min-h-screen w-full bg-white text-gdscGrey-700 fixed md:relative 3xl:w-[360px] md:w-fit
                border-gdscGrey-100 md:py-16 3xl:px-[60px] py-7 px-5 md:px-2
                transform  md:translate-x-0 transition duration-300 ease-out z-30"
    >
      <div>
        <NavLink
          to="/profile"
          className={() => `flex flex-row space-x-4 min-w-full 3xl:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
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
        {isAdmin && (
          <>
            <NavLink
              to="/domain-blacklist"
              className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'domain-blacklist'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'domain-blacklist'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
            >
              <ListIcon />
              <span>Domain Blacklist</span>
            </NavLink>
            <NavLink
              to="/url-blacklist"
              className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'url-blacklist'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'url-blacklist'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
            >
              <ListIcon />
              <span>Url Blacklist</span>
            </NavLink>
          </>
        )}
        <NavLink
          to="/url-filter"
          className={() => `flex flex-row space-x-4 min-w-full 3xl:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'url-filter'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'url-filter'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
        >
          <FilterIcon />
          <span>URLs Filter</span>
        </NavLink>
        <NavLink
          to="/change-password"
          className={() => `flex flex-row space-x-4 min-w-full md:w-[240px] items-center md:h-[52px] h-[58px] px-5 rounded bg-white
          ${
            page === 'change-password'
              ? 'bg-gdscBlue-300/10'
              : 'hover:bg-gdscBlue-300/10'
          } cursor-pointer 
          ${
            page === 'change-password'
              ? 'text-gdscBlue-300'
              : 'hover:text-gdscBlue-300'
          } transition-all
          ease-out duration-300`}
        >
          <LockIcon />
          <span>Change Password</span>
        </NavLink>
        {loggedInWithGoogle ? (
          <GoogleLogoutButton />
        ) : (
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
        )}
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  toggle: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
};
