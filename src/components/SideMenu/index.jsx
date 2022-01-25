import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { ReactComponent as AccountCircle } from 'assets/icons/account_circle.svg';
import { ReactComponent as LinkIcon } from 'assets/icons/link_icon.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock_icon.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout_icon.svg';
import { ReactComponent as StatIcon } from 'assets/icons/stat_icon.svg';

export default function SideMenu({ toggle }) {
  useEffect(() => {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('-translate-x-full');
  }, [toggle]);
  return (
    <div
      className="side-menu h-[100vh] bg-white text-gdscGrey-700 md:w-[360px] fixed md:relative w-full
                border-r border-gdscGrey-100 md:py-16 md:px-[60px] py-7 px-5
                transform  md:translate-x-0 transition duration-300 ease-out z-30"
    >
      <div>
        <div
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
md:                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
        >
          <AccountCircle className="w-6 h-6 mr-4 fill-current text-gdscBlue-300" />
          <p className="">My Profile</p>
        </div>
        <div
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
md:                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
        >
          <LinkIcon className="w-6 h-6 mr-4" />
          <p className="">My URLs</p>
        </div>
        <div
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
md:                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
        >
          <StatIcon className="w-6 h-6 mr-4" />
          <p className="">Statistics</p>
        </div>
        <div
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
md:                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
        >
          <LockIcon className="w-6 h-6 mr-4" />
          <p className="">Change Password</p>
        </div>
        <div
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscRed-300/10 active:bg-gdscRed-300/10 cursor-pointer
                    md:text-gdscRed-300 active:text-gdscRed-300 transition-all
                    ease-out duration-300"
        >
          <LogoutIcon className="w-6 h-6 mr-4" />
          <p className="">Logout</p>
        </div>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  toggle: PropTypes.bool.isRequired,
};
