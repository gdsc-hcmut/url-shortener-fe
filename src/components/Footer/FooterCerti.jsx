import React from 'react';

export default function FooterCerti() {
  return (
    <div className="bg-gdscGrey-700 min-h-fit w-full md:pl-[300px] md:pr-[300px] md:py-[28px] px-[5.625vw] pt-[25px] pb-[50px]">
      <div className="flex md:justify-between md:flex-row w-full h-full text-base text-[16px] flex-col-reverse items-center">
        <p className="text-white left h-5">
          GDSC HCMUT
          <sup> © </sup>
          2019-2022
        </p>
        <p className="text-white right">
          <u>2022 Privacy Policy.</u>
        </p>
      </div>
    </div>
  );
}
