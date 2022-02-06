import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import BackIcon from 'assets/icons/BackIcon.svg';
import CloseIcon from 'assets/icons/close.svg';

import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordDesktop({ show, onClose }) {
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

  return (
    <div
      aria-hidden="true"
      className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[376px] h-[376px] md:w-[500px] md:h-[360px] flex flex-col items-center border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3 px-3 flex gap-x-[396px]">
          <button
            type="button"
            className="h-8 w-10 bg-[#F0F5F7] flex items-center
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
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

ForgotPasswordDesktop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};