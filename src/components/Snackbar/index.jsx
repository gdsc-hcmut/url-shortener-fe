import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { ReactComponent as CloseIcon } from 'assets/icons/close_icon_snackbar.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_snackbar.svg';

export default function Snackbar({ onClose, show }) {
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
      <div className="relative w-[376px] h-[92px] p-5 flex bg-white rounded items-center">
        <DeleteIcon />
        <div className="ml-[18px]">
          <p className="font-semibold leading-5">LINK DELETED</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://shortlink.com"
            className="text-gdscGrey-700 mt-3 leading-5"
          >
            https://shortlink.com
          </a>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-gdscGrey-200 flex justify-center items-center absolute right-5"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

Snackbar.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
