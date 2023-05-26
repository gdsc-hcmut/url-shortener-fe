import PropTypes from 'prop-types';
import React from 'react';

export default function Modal({ children, show }) {
  return (
    <div
      aria-hidden="true"
      className={`fixed z-[99999] flex inset-0 bg-black bg-opacity-50 justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
    >
      <div
        aria-hidden
        className="relative w-[75%] md:w-[500px] h-[660px] flex items-center"
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
};
