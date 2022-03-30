import React from 'react';

export default function FooterCerti() {
  return (
    <div className="bg-gdscGrey-700 h-full md:h-[178px] md:min-h-fit w-full xl:pl-[300px] xl:pr-[300px] lg:pl-[240px] lg:pr-[240px] md:pl-[160px] md:pr-[160px] md:py-[28px] px-[5.625vw] pt-[40px] pb-[32px]">
      <div className="flex md:justify-between md:flex-row w-full h-full text-base flex-col-reverse items-center">
        <p className="text-white left h-5">
          GDSC HCMUT
          <sup> © </sup>
          2019-2022
        </p>
        <p className="text-white right mb-4 md:mb-0">
          <u>2022 Privacy Policy.</u>
        </p>
      </div>
    </div>
  );
}
