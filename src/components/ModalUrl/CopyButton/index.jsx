import PropTypes from 'prop-types';
import React from 'react';

export default function CopyButton({ copied, handleCopy }) {
  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`mx-[4px] md:mx-[8px] w-[75px] md:w-[96px] h-[44px] text-xs md:text-base text-white rounded-[8px] transition-all duration-300 ease-out ${
        copied
          ? 'bg-gdscGreen-300'
          : 'bg-gdscBlue-300 hover:bg-shorten-btn-hover '
      }`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

CopyButton.propTypes = {
  copied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};
