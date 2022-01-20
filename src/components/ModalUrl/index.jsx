import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Url from 'components/Url';

import Url from 'components/Url';

import CopyButton from './CopyButton';

export default function ModalUrl({ show, onClose }) {
  const [copied, setCopied] = useState(false);
  const { shortenedUrl } = useSelector((state) => state.url);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(shortenedUrl);
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
      className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[376px] h-[376px] md:w-[412px] md:h-[376px] flex flex-col items-center border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[153px] h-[148px] md:w-[152px] md:h-[152px] mt-[32px] mx-[111px] md:mx-[130px] bg-[#000000]" />
        <button
          type="button"
          className="w-[180px] h-[44px] text-base bg-gdscBlue-300 hover:bg-shorten-btn-hover rounded-[8px] py-[12px] mt-[36px] text-white transition-all duration-300 ease-out"
        >
          Download PNG
        </button>
        <div className="flex justify-end items-center w-[315px] md:w-[352px] h-[54px]  mt-[36px] md:mt-[32px] border-[1px] border-gdscBlue-300 rounded-[8px]">
          <Url shortenedUrl={shortenedUrl} />
          <div className="border-l-[1px] h-[54px] border-gdscBlue-300" />
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
