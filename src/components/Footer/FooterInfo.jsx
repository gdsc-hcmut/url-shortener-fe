import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import Logo from 'assets/image/logo.svg';

export default function FooterInfo() {
  return (
    <div className="hidden md:block md:min-h-full h-fit w-full bg-white">
      <div
        className="md:h-[255px] h-auto w-full lg:pl-[100px] xl:pl-[301px] lg:pr-[100px] md:pr-[347px] md:py-[32px]
                      px-[20px] flex justify-space md:flex-row flex-col "
      >
        <div className="md:h-[255px] h-auto flex flex-col justify-between md:pt-0">
          <img
            src={Logo}
            style={{ height: 50, width: 407.05 }}
            alt="GDSC logo"
          />
          <form className="w-[302px] flex flex-col md:mt-0 mt-[24px]" action="">
            <p className=" w-[302px] text-gdscBlue-300 text-[16px] font-bold relative">
              Subscribe and stay up to date with our news and events.
            </p>
            <div className="flex flex-row mt-[30px] mb-[40px]">
              <input
                className="decoration-gdscBlue-300 text-[18px] placeholder-gdscBlue-300
                font-medium border-b-2 border-gdscBlue-300 outline-none w-full opacity-50"
                type="text"
                placeholder="Enter email"
              />
              <div className="w-[24px] h-[24px] right-0 my-auto bord rounded-full relative">
                <img
                  className="absolute right-[22px]"
                  src={Arrow}
                  alt="arrow icon"
                />
              </div>
            </div>
          </form>
        </div>
        <div
          className="flex flex-col text-gdscGrey-800
                        md:mx-[144px]"
        >
          <p className="mb-[5px] font-bold text-[18px] md:text-[24px]">Contact</p>
          <p className="text-[16px] md:text-[18px] my-[5px]">
            dsc.hcmut@gmail.com
          </p>
        </div>
        <div className="flex flex-col text-gdscGrey-800">
          <p className="mb-[5px] mt-[-5px] text-[18px] md:text-[24px] font-bold ">Follow</p>
          <p className="text-[16px] md:text-[18px] my-[5px]">Facebook</p>
          <p className="text-[16px] md:text-[18px] my-[5px]">Youtube</p>
          <p className="text-[16px] md:text-[18px] mt-[5px]">Linkedin</p>
        </div>
      </div>
    </div>
  );
}
