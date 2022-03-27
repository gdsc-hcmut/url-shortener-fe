import PropTypes from 'prop-types';
import React from 'react';

import CloseIcon from 'assets/icons/close.svg';

export default function LongUrlModal({ show, text, onClose }) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const handleCloseBtn = () => onClose();

  return (
    <div
      aria-hidden
      className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onKeyDown={closeOnEscapeKeyDown}
      onClick={onClose}
    >
      <div
        aria-hidden
        className="relative md:w-[500px] h-[304px] flex items-center border bg-white rounded mx-5 px-5 py-[32px]"
      >
        <button
          aria-hidden
          type="button"
          className="absolute w-[40px] h-[40px] bg-[#F0F5F7] hover:bg-[#DCF3FC]
                    flex flex-col justify-center items-center transition-all duration-300 ease-out
                    right-[12px] top-[12px] rounded"
          onClick={handleCloseBtn}
        >
          <img className="w-[12px] h-[12px]" src={CloseIcon} alt="X" />
        </button>
        <div
          aria-hidden
          className="w-full h-full flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2ßxl font-medium mb-8">Original Url</h1>
          <div className="relative mb-5">
            <div className="w-full h-[176px] bg-white border-[1px] border-gdscGrey-200 hover:border-gdscBlue-300 rounded shadow-[0_6px_15px_rgba(64,79,104,0.05)] outline-none p-5 break-words transition duration-300 font-normal text-base overflow-y-scroll">
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LongUrlModal.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

LongUrlModal.defaultProps = {
  show: false,
};
