import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavbarButton({ isMobileHomepage }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'SHOW_MODAL',
      payload: true,
    });
  };
  if (!isMobileHomepage) {
    return (
      <div>
        <button
          type="button"
          onClick={handleClick}
          className="bg-gdscBlue-200 ease-out duration-300 hover:bg-login-btn-hover bg-opacity-10 text-gdscBlue-300 font-normal hover:bg-opacity-10 rounded w-[100px] h-[36px] md:w-[180px] md:h-[52px] content-center text-base  md:my-0 ml-[30px] "
        >
          <p>Login</p>
        </button>
      </div>
    );
  }
  return (
    <Link to="/log-in">
      <button
        type="button"
        className="bg-gdscBlue-200 ease-out duration-300 hover:bg-login-btn-hover bg-opacity-10 text-gdscBlue-300 font-normal hover:bg-opacity-10 rounded w-[100px] h-[36px] md:w-[180px] md:h-[52px] content-center text-base  md:my-0 ml-[30px] "
      >
        <p>Login</p>
      </button>
    </Link>
  );
}
NavbarButton.propTypes = {
  isMobileHomepage: PropTypes.bool.isRequired,
};
