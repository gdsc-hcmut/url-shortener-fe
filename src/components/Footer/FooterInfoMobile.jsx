import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import Logo from 'assets/image/logo.svg';

export default function FooterInfoMobile() {
  return (
    <div className="md:hidden h-fit w-full bg-white">
      <div
        className="h-auto w-full
                      px-[20px] py-[40.59px] flex justify-between
                      flex-col "
      >
        <div className="h-auto flex flex-col justify-between">
          <img
            src={Logo}
            style={{ height: 50, width: 407.05 }}
            alt="GDSC logo"
          />
          <div
            className="flex flex-col text-[1.125rem] text-gdscverydarkgrey font-medium
                        mt-[1.531rem]"
          >
            <p className="mb-[5px]">Contact</p>
            <p className="text-[14px] my-[5px]">dsc.hcmut@gmail.com</p>
          </div>
          <div className="flex flex-col text-[18px] text-gdscverydarkgrey mt-[2.688rem]">
            <p className="mb-[22px] mt-[-5px]">Follow</p>
            <p className="text-[14px] my-[5px]">Facebook</p>
            <p className="text-[14px] my-[5px]">Youtube</p>
            <p className="text-[14px] mt-[5px]">Linkedin</p>
          </div>
          <form className="w-[302px] flex flex-col mt-[24px]" action="">
            <p className=" w-[302px] text-gdscblue text-[18px] font-bold relative">
              Subscribe and stay up to date with our news and events.
            </p>
            <div className="flex flex-row mt-[30px] mb-[40px]">
              <input
                className="decoration-gdscblue text-[18px] placeholder-gdscblue
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
      </div>
    </div>
  );
}
