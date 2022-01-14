import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import CopyButton from './CopyButton';

export default function ModalUrl({ show, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

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
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[410px] h-[375px] flex flex-col items-center border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
      >
        <div className="w-[153px] h-[148px] mt-[30px] ml-[128px] mr-[129px] bg-[#000000]" />
        <button
          type="button"
          className="bg-gdscBlue-300 rounded py-[12px] px-[40px] mt-[35px] text-white"
        >
          Download PNG
        </button>
        <div className="flex justify-end items-center w-[349px] h-[53px] mt-[36px] border-[1px] border-gdscBlue-300 rounded">
          <p className="text-gdscGrey-800 mx-[9px] w-[224px] overflow-auto no-scrollbar">
            https://url.gdschcmut.dev/eXPhHdsaddsaasdsssd
          </p>
          <div className="border-l-[1px] h-[53px] border-gdscBlue-300" />
          <CopyButton copied={copied} handleCopy={handleCopy} />
        </div>
      </div>
    </div>
  );
}

ModalUrl.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
