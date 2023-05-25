import PropTypes from 'prop-types';
import React from 'react';

export default function Modal({ children, show, onClose }) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };
  return (
    <div
      aria-hidden="true"
      className={`fixed z-50 flex inset-0 bg-black bg-opacity-50 justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden
        className="relative w-[75%] md:w-[500px] h-[660px] flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
