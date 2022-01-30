import React from 'react';

export default function QR() {
  return (
    <div className="md:h-[480px] xl:w-full md:w-[504px] w-full pt-11 pb-[72px] flex flex-col space-y-6 md:space-y-14 items-center bg-white rounded">
      <div className="w-60 h-60 md:w-[264px] md:h-[264px] bg-black">QR</div>
      <button
        type="button"
        className="w-[164px] h-11 text-white font-normal text-base bg-gdscBlue-300 hover:bg-shorten-btn-hover transition-all duration-300 ease-out rounded"
      >
        Export as PNG
      </button>
    </div>
  );
}
