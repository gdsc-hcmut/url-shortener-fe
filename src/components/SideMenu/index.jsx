import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import AccountCircle from 'assets/icons/account_circle';
import LinkIcon from 'assets/icons/link_icon';
import LockIcon from 'assets/icons/lock_icon';
import LogoutIcon from 'assets/icons/logout_icon';
import StatIcon from 'assets/icons/stat_icon';

export default function SideMenu({ toggle, screenWidth }) {
  const [myProfileColors, setMyProfileColors] = useState('#696969');
  const [myUrlColors, setMyUrlColors] = useState('#696969');
  const [statIconColors, setStatIconColors] = useState('#696969');
  const [changePassIconColors, setChangePassIconColors] = useState('#696969');

  const handlePressing = (e) => {
    e.stopPropagation();
    switch (e.target.id) {
      case 'my-profile':
        setMyProfileColors('#4285F4');
        break;

      case 'my-url':
        setMyUrlColors('#4285F4');
        break;

      case 'stat':
        setStatIconColors('#4285F4');
        break;

      case 'change-pass':
        setChangePassIconColors('#4285F4');
        break;

      default:
        break;
    }
  };

  const handleLeaving = (e) => {
    e.stopPropagation();
    switch (e.target.id) {
      case 'my-profile':
        setMyProfileColors('#696969');
        break;

      case 'my-url':
        setMyUrlColors('#696969');
        break;

      case 'stat':
        setStatIconColors('#696969');
        break;

      case 'change-pass':
        setChangePassIconColors('#696969');
        break;

      default:
        break;
    }
  };

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
          id="my-profile"
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
        >
          <AccountCircle color={myProfileColors} />
          <p className="ml-4">My Profile</p>
        </div>
        <div
          id="my-url"
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
        >
          <LinkIcon color={myUrlColors} />
          <p className="ml-4">My URLs</p>
        </div>
        <div
          id="stat"
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
        >
          <StatIcon color={statIconColors} />
          <p className="ml-4">Statistics</p>
        </div>
        <div
          id="change-pass"
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
        >
          <LockIcon color={changePassIconColors} />
          <p className="ml-4">Change Password</p>
        </div>
        <div
          id="logout"
          className="flex min-w-full items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscRed-300/10 active:bg-gdscRed-300/10 cursor-pointer
                    md:text-gdscRed-300 active:text-gdscRed-300 transition-all
                    ease-out duration-300"
        >
          <LogoutIcon color="#DB4437" />
          <p className="ml-4">Logout</p>
        </div>
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  toggle: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired,
};
