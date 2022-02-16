import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { ReactComponent as SuccessIcon } from 'assets/icons/success_icon.svg';
import { ReactComponent as SuccessIconMobile } from 'assets/icons/success_icon_mobile.svg';

export default function ModalSucess({ text, show, onClose }) {
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
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[300px] h-[300px] md:w-[412px] md:h-[312px] px-10 py-8 flex flex-col justify-between items-center border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <div className="md:hidden">
            <SuccessIconMobile />
          </div>
          <div className="hidden md:block">
            <SuccessIcon />
          </div>
          <span className="text-2xl text-gdscGreen-300 mt-11">SUCCESS!</span>
        </div>
        <span className="text-base text-gdscGrey-700 text-center">{text}</span>
      </div>
    </div>
  );
}

ModalSucess.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

ModalSucess.defaultProps = {
  show: false,
};
