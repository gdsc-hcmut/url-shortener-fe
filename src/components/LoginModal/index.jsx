import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import CloseIcon from 'assets/icons/close.svg';

import LoginForm from './LoginForm';
import LoginWithGoogle from './LoginWithGoogle';

export default function LoginModal({ show, onClose }) {
  const closeOnEscapeKeyDown = (e) => {
    // e.stopPropagation();
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

  return (
    <div
      aria-hidden="true"
      className={`fixed z-10 hidden inset-0 bg-black bg-opacity-50 md:flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="relative w-[500px] h-[628px] flex items-center border bg-white rounded px-[40px] py-[32px]"
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
          <a href=" " className="mb-7">
            {"Don't have an account? "}
            <button type="button" className="active:underline font-bold">
              Sign up
            </button>
          </a>
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
