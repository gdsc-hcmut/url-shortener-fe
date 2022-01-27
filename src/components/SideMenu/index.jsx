import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as AccountCircle } from 'assets/icons/account_circle.svg';
import { ReactComponent as LinkIcon } from 'assets/icons/link_icon.svg';
import { ReactComponent as LockIcon } from 'assets/icons/lock_icon.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/logout_icon.svg';
import { ReactComponent as StatIcon } from 'assets/icons/stat_icon.svg';

export default function SideMenu({ toggle, page }) {
  const navigate = useNavigate();

  const myProfileBtnClass = `flex min-w-full md:w-[240px] items-center
  md:h-[52px] h-[58px] px-5 rounded bg-white
  ${
  page === 'my-profile' ? 'bg-gdscBlue-300/10' : 'hover:bg-gdscBlue-300/10'
} cursor-pointer
  ${
  page === 'my-profile' ? 'text-gdscBlue-300' : 'hover:text-gdscBlue-300'
} transition-all
  ease-out duration-300`;

  const myUrlBtnClass = `flex min-w-full md:w-[240px] items-center
  md:h-[52px] h-[58px] px-5 rounded bg-white
  ${
  page === 'detail' ? 'bg-gdscBlue-300/10' : 'hover:bg-gdscBlue-300/10'
} cursor-pointer
  ${
  page === 'detail' ? 'text-gdscBlue-300' : 'hover:text-gdscBlue-300'
} transition-all
  ease-out duration-300`;

  const statBtnClass = `flex min-w-full md:w-[240px] items-center
  md:h-[52px] h-[58px] px-5 rounded bg-white
  ${
  page === 'stat' ? 'bg-gdscBlue-300/10' : 'hover:bg-gdscBlue-300/10'
} cursor-pointer
  ${
  page === 'stat' ? 'text-gdscBlue-300' : 'hover:text-gdscBlue-300'
} transition-all
  ease-out duration-300`;

  const changePassBtnClass = `flex min-w-full md:w-[240px] items-center
  md:h-[52px] h-[58px] px-5 rounded bg-white
  ${
  page === 'change-pass' ? 'bg-gdscBlue-300/10' : 'hover:bg-gdscBlue-300/10'
} cursor-pointer
  ${
  page === 'change-pass' ? 'text-gdscBlue-300' : 'hover:text-gdscBlue-300'
} transition-all
  ease-out duration-300`;

  const logOutBtnClass = `flex min-w-full md:w-[240px] items-center
  md:h-[52px] h-[58px] px-5 rounded bg-white
  hover:bg-gdscRed-300/10 cursor-pointer
  text-gdscRed-300 transition-all
  ease-out duration-300`;

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
          className={myProfileBtnClass}
          onClick={handleClick}
        >
          <AccountCircle />
          <p className="ml-4">My Profile</p>
        </div>
        <div
          aria-hidden="true"
          id="my-url"
          className={myUrlBtnClass}
          onClick={handleClick}
        >
          <LinkIcon />
          <p className="ml-4">My URLs</p>
        </div>
        <div
          aria-hidden="true"
          id="stat"
          className={statBtnClass}
          onClick={handleClick}
        >
          <StatIcon />
          <p className="ml-4">Statistics</p>
        </div>
        <div
          aria-hidden="true"
          id="change-pass"
          className={changePassBtnClass}
          onClick={handleClick}
        >
          <LockIcon />
          <p className="ml-4">Change Password</p>
        </div>
        <div
          aria-hidden="true"
          id="logout"
          className={logOutBtnClass}
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
