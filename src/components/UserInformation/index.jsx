import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router';

import AccountCircleIcon from 'assets/icons/account_circle_white.svg';
import BackIcon from 'assets/icons/keyboard_arrow_left.svg';

export default function UserInformation({ name }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-[1510px] h-[auto] ml-[60px] mt-[36px]">
      <button
        type="button"
        onClick={() => navigate('/url-filter')}
        className="absolute top-0 left-0 w-[96px] h-[40px] flex items-center justify-between bg-[#D5E1F5] rounded-[8px] pl-[4px] pr-[20px] cursor-pointer"
      >
        <img
          src={BackIcon}
          className="w-[24px] h-[24px] mr-[4px]"
          alt="close-icon"
        />
        <span className="text-gdscBlue-300 text-[16px] font-normal">BACK</span>
      </button>
      <div className="w-auto h-[120px] mt-[80px] flex items-center flex-row">
        <div className="w-[120px] h-[120px] flex items-center justify-center mr-[40px] flex-row bg-gdscGrey-700 opacity-80 rounded-[8px]">
          <img
            src={AccountCircleIcon}
            className="w-[112px] h-[112px] fill-white opacity-80"
            alt="account circle icon"
          />
        </div>
        <div className="h-full flex flex-col items-start">
          <span className="text-[36px] font-medium mb-[16px] text-black">
            {name}
          </span>
          <span className="text-[20px] font-normal mb-[10px] text-gdscGrey-800">
            GDSC
          </span>
          <span className="text-[20px] font-normal text-gdscGrey-800">
            fugaatklol@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

UserInformation.propTypes = {
  name: PropTypes.string,
};

UserInformation.defaultProps = {
  name: '',
};
