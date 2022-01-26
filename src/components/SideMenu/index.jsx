import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircle from 'assets/icons/account_circle';
import LinkIcon from 'assets/icons/link_icon';
import LockIcon from 'assets/icons/lock_icon';
import LogoutIcon from 'assets/icons/logout_icon';
import StatIcon from 'assets/icons/stat_icon';
import useWindowSize from 'components/SideMenu/ScreenSizeHook';

export default function SideMenu({ toggle, page }) {
  const [myProfileColors, setMyProfileColors] = useState('#696969');
  const [myUrlColors, setMyUrlColors] = useState('#696969');
  const [statIconColors, setStatIconColors] = useState('#696969');
  const [changePassIconColors, setChangePassIconColors] = useState('#696969');
  const [screenWidth] = useWindowSize();
  const navigate = useNavigate();

  const handleClick = (e) => {
    switch (e.target.id) {
      case 'my-profile':
        navigate('/my-profile');
        break;

      case 'my-url':
        navigate('/my-url');
        break;

      case 'stat':
        navigate('/stat');
        break;

      case 'change-pass':
        navigate('/change-pass');
        break;
      case 'logout':
        navigate('/log-out');
        break;

      default:
        break;
    }
  };

  const handlePressing = (e) => {
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
      className="side-menu h-full w-full bg-white text-gdscGrey-700 fixed md:relative 2xl:w-[360px] md:w-fit
                border-r border-gdscGrey-100 md:py-16 2xl:px-[60px] xl:px-[36px] lg:px-[28px] py-7 px-5
                transform  md:translate-x-0 transition duration-300 ease-out z-30"
    >
      <div>
        <div
          aria-hidden="true"
          id="my-profile"
          className="flex min-w-full md:w-[240px] items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300 "
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
          onClick={handleClick}
        >
          <AccountCircle
            color={page === 'my-profile' ? '#4285F4' : myProfileColors}
          />
          <p className="ml-4">My Profile</p>
        </div>
        <div
          aria-hidden="true"
          id="my-url"
          className="flex min-w-full md:w-[240px] items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
          onClick={handleClick}
        >
          <LinkIcon
            color={
              page === 'my-url' || page === 'detail' ? '#4285F4' : myUrlColors
            }
          />
          <p className="ml-4">My URLs</p>
        </div>
        <div
          aria-hidden="true"
          id="stat"
          className="flex min-w-full md:w-[240px] items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
          onClick={handleClick}
        >
          <StatIcon color={page === 'stat' ? '#4285F4' : statIconColors} />
          <p className="ml-4">Statistics</p>
        </div>
        <div
          aria-hidden="true"
          id="change-pass"
          className="flex min-w-full md:w-[240px] items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscBlue-300/10 active:bg-gdscBlue-300/10 cursor-pointer
                    md:hover:text-gdscBlue-300 active:text-gdscBlue-300 transition-all
                    ease-out duration-300"
          onMouseOver={screenWidth >= 768 ? handlePressing : () => {}}
          onFocus={() => {}}
          onMouseLeave={screenWidth >= 768 ? handleLeaving : () => {}}
          onPointerDown={screenWidth < 768 ? handlePressing : () => {}}
          onPointerUp={screenWidth < 768 ? handleLeaving : () => {}}
          onClick={handleClick}
        >
          <LockIcon
            color={page === 'change-pass' ? '#4285F4' : changePassIconColors}
          />
          <p className="ml-4">Change Password</p>
        </div>
        <div
          aria-hidden="true"
          id="logout"
          className="flex min-w-full md:w-[240px] items-center
                    md:h-[52px] h-[58px] px-5 rounded bg-white
                    md:hover:bg-gdscRed-300/10 active:bg-gdscRed-300/10 cursor-pointer
                  text-gdscRed-300 transition-all
                    ease-out duration-300"
          onClick={handleClick}
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
  page: PropTypes.string.isRequired,
};
