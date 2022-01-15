import React from 'react';

export default function FooterCerti() {
  return (
    <div className="bg-gdscGrey-700 min-h-fit w-full xl:pl-[300px] xl:pr-[300px] lg:pl-[240px] lg:pr-[240px] md:pl-[160px] md:pr-[160px] md:py-[28px] px-[5.625vw] pt-[25px] pb-[50px]">
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
