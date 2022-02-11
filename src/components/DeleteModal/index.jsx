import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_modal.svg';

import Button from './Button';

export default function DeleteModal({ text, onClose, show }) {
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

  const handleCancel = () => onClose();
  const handleDelete = () => onClose();

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
        className="w-[376px] h-[376px] md:w-[412px] px-[58px] py-8 flex flex-col items-center border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <DeleteIcon />
        </div>
        <span className="text-2xl font-normal text-gdscRed-300 mt-7">
          ARE YOU SURE?
        </span>
        <span className="text-base text-gdscGrey-800 text-center mt-7 md:mt-9">
          {text}
        </span>
        <div className="w-[260px] mt-3 flex justify-between">
          <Button text="Cancel" onClick={handleCancel} />
          <Button text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
