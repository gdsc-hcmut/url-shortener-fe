import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import FessiorLogo from 'assets/icons/logo/Fessior-15.png';
import GDSCLogo from 'assets/icons/logo/GDSC_Logo.png';

export default function FooterInfoMobile() {
  return (
    <div className="md:hidden h-fit w-full bg-white">
      <div className="h-auto w-full px-[20px] mx-auto flex justify-between flex-col ">
        <div className="h-auto flex flex-col justify-between pt-[48px]">
          <div className="flex items-center justify">
            <img
              className="h-[50px] mr-[12px]"
              src={FessiorLogo}
              alt="Fessior logo"
            />
            <img
              className="h-[50px] mr-[12px]"
              src={GDSCLogo}
              alt="GDSC logo"
            />
          </div>
          <div
            className="flex flex-col text-base text-gdscGrey-800
                        mt-7"
          >
            <p className="font-bold">
              Contact
              <br />
              contact@gdschcmut.dev
            </p>
          </div>
          <div className="flex flex-col text-base text-gdscGrey-800 mt-[44px]">
            <p className="mb-[24px] font-bold">Follow</p>
            <a
              className="mb-[12px]"
              href="https://www.facebook.com/dscxhcmut"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="mb-[12px]"
              href="https://discord.gg/VMEkx5xCZg"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            <a
              href="https://www.linkedin.com/company/developer-student-clubs-hcmut/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
          <form className="w-[302px] flex flex-col mt-[40px]" action="">
            <p className=" w-[302px] text-gdscBlue-300 text-base font-bold relative">
              Subscribe and stay up to date with our news and events.
            </p>
            <div className="flex flex-row mt-[28px] mb-[28px]">
              <input
                className="decoration-gdscBlue-300 text-base placeholder-gdscBlue-300
                font-medium border-b-2 border-gdscBlue-300 outline-none w-full"
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
