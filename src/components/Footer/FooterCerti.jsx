import React from 'react';

export default function FooterCerti() {
  return (
    <div className="bg-gdscdarkgrey min-h-fit w-full md:px-[200px] md:py-[1.5vw]
                    px-[108px] pt-[25px] pb-[50px]"
    >
      <div className="flex justify-between md:flex-row w-full h-full text-[16px] flex-col">
        <p className="text-white left">
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
