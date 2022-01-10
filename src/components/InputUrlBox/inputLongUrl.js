import React from 'react';

export default function InputLongUrl() {
  return (
    <div className="w-[16.25rem] h-12 absolute left-[1.938rem] top-[1.563rem] flex-col space-y-2">
      <p className="text-base font-medium h-5"><strong>Your URL</strong></p>
      <input className="text-[0.938rem] font-normal text-dim-gray h-5 w-[16.25rem]" placeholder="Input the URL you want to shorten" />
    </div>
  );
}
