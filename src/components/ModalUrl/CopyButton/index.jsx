/* eslint-disable */
import React from 'react';

export default function CopyButton({ copied, handleCopy }) {
  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`mx-[9px] w-[90px] h-[43px] text-white rounded transition-all duration-300 ease-out ${
        copied ? 'bg-gdscGreen-300' : 'bg-gdscBlue-300'
      }`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
