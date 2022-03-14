import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import Logo from 'assets/image/logo.svg';

export default function FooterInfo() {
  return (
    <div className="hidden md:block md:min-h-full h-fit w-full bg-white">
      <div
        className="md:h-[256px] h-auto w-full lg:pl-[100px] xl:pl-[300px] lg:pr-[100px] md:pl-[40px] md:pr-[300px] md:py-[32px]
                      px-[20px] flex justify-space md:flex-row flex-col "
      >
        <div className="h-[256px] flex flex-col justify-between mt-9">
          <img
            src={Logo}
            style={{ height: 50, width: 407.05 }}
            alt="GDSC logo"
          />
          <form className="w-[302px] flex flex-col mt-[56px]" action="">
            <p className=" w-[302px] text-gdscBlue-300 text-[20px] font-medium relative">
              Subscribe and stay up to date with our news and events.
            </p>
            <div className="flex flex-row mt-[30px] mb-[40px]">
              <input
                className="decoration-gdscBlue-300 text-[16px] placeholder-gdscBlue-300
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
                        md:mr-[80px] md:ml-[80px] lg:ml-[144px] mt-[60px]"
        >
          <p className="mb-[5px] font-bold text-[18px] md:text-[24px]">
            Contact
          </p>
          <p className="text-[16px] md:text-[18px] my-[5px]">
            contact@gdschcmut.dev
          </p>
        </div>
        <div className="flex flex-col text-gdscGrey-800 mt-[60px]">
          <p className="mb-[5px] mt-[-5px] text-[18px] md:text-[24px] font-bold ">
            Follow
          </p>
          <p className="social-media">Facebook</p>
          <p className="social-media">Youtube</p>
          <p className="social-media">Linkedin</p>
        </div>
      </div>
    </div>
  );
}
