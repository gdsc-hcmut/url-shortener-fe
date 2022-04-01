import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import React, { useState, useEffect } from 'react';

import Url from 'components/Url';

import CopyButton from './CopyButton';

export default function ModalUrl({
  show, onClose, shortenedUrl, slug,
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
  const downloadQR = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${slug}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
        <QRCode
          id="qrcode"
          value={shortenedUrl}
          size={152}
          className="w-[152px] h-[152px] mt-[32px] mx-[111px] md:mx-[130px]"
        />
        <button
          type="button"
          onClick={downloadQR}
          className="w-[180px] h-[44px] text-base bg-gdscBlue-300 hover:bg-shorten-btn-hover rounded-[8px] py-[12px] mt-[20px] text-white transition-all duration-300 ease-out"
        >
          Download PNG
        </button>
        <p className="text-gdscBlue-300 mt-3">
          This shortened link will expire after one month
        </p>
        <div className="flex justify-end items-center w-[315px] md:w-[352px] h-[54px]  mt-3 border-[1px] border-gdscBlue-300 rounded-[8px]">
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
  slug: PropTypes.string.isRequired,
};
