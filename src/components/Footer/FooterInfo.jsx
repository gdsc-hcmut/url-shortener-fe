import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import Logo from 'assets/image/logo.svg';

export default function FooterInfo() {
  return (
    <div className="md:min-h-full h-fit w-full bg-white">
      <div
        className="md:h-[255px] h-auto w-full md:px-[13.9vw] md:py-[32px]
                      px-[20px] py-[50px] flex justify-between
                      md:flex-row flex-col "
      >
        <div className="md:h-[255px] h-auto flex flex-col justify-between md:pt-0 pt-[">
          <img
            src={Logo}
            style={{ height: 50, width: 407.05 }}
            alt="GDSC logo"
          />
          <form className="w-[302px] flex flex-col md:mt-0 mt-[24px]" action="">
            <p className=" w-[302px] text-gdscblue text-[18px] font-bold relative">
              Subscribe and stay up to date with our news and events.
            </p>
            <div className="flex flex-row mt-[30px] mb-[40px]">
              <input
                className="decoration-gdscblue text-[18px]
                font-medium border-b-2 border-gdscblue outline-none w-full"
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
          className="flex flex-col md:text-[1.7vw] text-[18px] text-gdscverydarkgrey
                        md:mx-[1vw] "
        >
          <p className="mb-[5px]">Contact</p>
          <p className="md:text-[1.2vw] text-[14px] my-[5px]">
            dsc.hcmut@gmail.com
          </p>
        </div>
        <div className="flex flex-col md:text-[1.7vw] text-[18px] text-gdscverydarkgrey">
          <p className="my-[5px]">Follow</p>
          <p className="md:text-[1.2vw] text-[14px] my-[5px]">Facebook</p>
          <p className="md:text-[1.2vw] text-[14px] my-[5px]">Youtube</p>
          <p className="md:text-[1.2vw] text-[14px] mt-[5px]">Linkedin</p>
        </div>
      </div>
    </div>
  );
}
