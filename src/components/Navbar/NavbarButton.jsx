import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { SHOW_LOG_IN_MODAL } from 'action-types';

export default function NavbarButton({ isMobileHomepage }) {
  const dispatch = useDispatch();
  if (!isMobileHomepage) {
    return (
      <div>
        <button
          type="button"
          onClick={() => dispatch({
            type: SHOW_LOG_IN_MODAL,
            payload: true,
          })}
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
