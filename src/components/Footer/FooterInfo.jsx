import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import Logo from 'assets/image/logo.svg';

export default function FooterInfo() {
  return (
    <div className="min-h-full w-full bg-white">
      <div
        className="h-[255px] w-full px-[200px] py-[32px]
                      flex justify-between flex-row text-[16px] basis-1"
      >
        <div className="h-[255px] flex flex-col justify-between">
          <img
            src={Logo}
            style={{ height: 50, width: 407.05 }}
            alt="GDSC logo"
          />
          <form className="w-[302px] flex flex-col" action="">
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
                <img className="" src={Arrow} alt="arrow icon" />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col basis-1 text-[1.7vw] text-gdscverydarkgrey">
          <p className="font-bold">Contact</p>
          <p className="text-[1.2vw]">dsc.hcmut@gmail.com</p>
        </div>
        <div className="flex flex-col basis-1 text-[1.7vw] text-gdscverydarkgrey">
          <p className="font-bold">Follow</p>
          <div className="text-[1.2vw]">
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
