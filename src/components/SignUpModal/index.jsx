import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SHOW_LOG_IN_MODAL, SHOW_SIGN_UP_MODAL } from 'action-types';
import { clearError } from 'actions/error';
import BackIcon from 'assets/icons/BackIcon.svg';
import CloseIcon from 'assets/icons/close.svg';

// import LoginWithGoogle from './LoginWithGoogle';
import SignUpForm from './SignUpForm';

export default function SignUpDesktop({ show, onClose }) {
  const dispatch = useDispatch();
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  const switchToLogIn = () => {
    dispatch({
      type: SHOW_SIGN_UP_MODAL,
      payload: false,
    });
    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: true,
    });
    dispatch(clearError());
  };
  return (
    <div
      aria-hidden="true"
      className={`fixed z-50 inset-0 bg-black bg-opacity-50 hidden md:flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[500px] h-[640px] flex flex-col border bg-white rounded overflow-y-scroll no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3 px-3 flex gap-x-[396px]">
          <button
            type="button"
            onClick={switchToLogIn}
            className="h-10 w-10 bg-[#F0F5F7] flex items-center
            hover:bg-[#DCF3FC] transition-all duration-300 ease-out rounded-[8px] p-[14px]"
          >
            <img className="w-3 h-3" src={BackIcon} alt="Back button" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 bg-[#F0F5F7] hover:bg-[#DCF3FC] transition-all duration-300 ease-out rounded-[8px] p-[14px]"
          >
            <img className="w-3 h-3" src={CloseIcon} alt="X button" />
          </button>
        </div>
        <SignUpForm isMobile={false} />
        {/* <div className="mt-[16px] h-10 self-center flex items-center">
          <div className="w-[170px] h-px bg-gdscGrey-200 mr-1" />
          or
          <div className="w-[170px] h-px bg-gdscGrey-200 ml-1" />
        </div>
         <LoginWithGoogle /> */}
      </div>
    </div>
  );
}

SignUpDesktop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
