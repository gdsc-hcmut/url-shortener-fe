import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Url from 'components/Url';

import CopyButton from './CopyButton';

export default function ModalUrl({
  show, onClose, shortenedUrl, qrCode,
}) {
  const [copied, setCopied] = useState(false);
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
  const downloadImage = () => {
    console.log('download');
    saveAs(qrCode, `${shortenedUrl}.png`);
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
      className={`fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
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
        <img
          src={qrCode}
          alt="QR Code"
          className="w-[152px] h-[152px] md:w-[152px] md:h-[152px] mt-[32px] mx-[111px] md:mx-[130px]"
        />
        <button
          type="button"
          onClick={downloadImage}
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
  shortenedUrl: PropTypes.string.isRequired,
  qrCode: PropTypes.string.isRequired,
};
