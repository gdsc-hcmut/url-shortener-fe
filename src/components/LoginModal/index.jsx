import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { SHOW_LOG_IN_MODAL, SHOW_SIGN_UP_MODAL } from 'action-types';
import { clearError } from 'actions/error';
import CloseIcon from 'assets/icons/close.svg';

import LoginForm from './LoginForm';
import LoginWithGoogle from './LoginWithGoogle';

export default function LoginModal({ show, onClose }) {
  const dispatch = useDispatch();
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const handleCloseBtn = () => onClose();

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  const switchToSignUp = () => {
    dispatch({
      type: SHOW_SIGN_UP_MODAL,
      payload: true,
    });
    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: false,
    });
    dispatch(clearError());
  };

  return (
    <div
      aria-hidden="true"
      className={`fixed z-50 hidden inset-0 bg-black bg-opacity-50 md:flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="relative w-[500px] h-[660px] flex items-center border bg-white rounded px-[40px] py-[32px]"
      >
        <button
          aria-hidden="true"
          type="button"
          className="absolute w-[40px] h-[40px] bg-[#F0F5F7] hover:bg-[#DCF3FC]
                    flex flex-col justify-center items-center transition-all duration-300 ease-out
                    right-[12px] top-[12px] rounded"
          onClick={handleCloseBtn}
        >
          <img className="w-[12px] h-[12px]" src={CloseIcon} alt="X" />
        </button>
        <div
          aria-hidden="true"
          className="w-full h-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl font-bold mb-7">Login</h1>
          <LoginForm />
          <button type="button" onClick={switchToSignUp} className="mb-7 flex">
            {"Don't have an account? "}
            <p className="active:underline font-bold ml-1">Sign up</p>
          </button>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
