import React from 'react';

import Arrow from 'assets/icons/arrow.svg';
import FessiorLogo from 'assets/icons/logo/Fessior-15.png';
import GDSCLogo from 'assets/icons/logo/GDSC_Logo.png';

export default function FooterInfo() {
  return (
    <div className="hidden md:block h-fit w-full bg-white">
      <div className="md:min-h-[320px] xl:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] h-auto flex justify-between py-[80px] items-center md:flex-row flex-col mx-auto">
        <div className="h-[256px] flex flex-col justify-between mt-9">
          <div className="flex items-center min-w-[400px]">
            <img
              className="max-h-[80px] mr-[20px]"
              src={FessiorLogo}
              alt="Fessior logo"
            />
            <img
              className="max-h-[80px] mr-[20px]"
              src={GDSCLogo}
              alt="GDSC logo"
            />
          </div>
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
        <div className="flex flex-row md:gap-3 xl:gap-8 2xl:gap-12">
          <div className="flex flex-col text-gdscGrey-800 mt-[60px]">
            <p className="mb-[5px] font-bold text-[18px] md:text-[24px]">
              Contact
            </p>
            <a
              href="mailto:contact@gdschcmut.dev"
              className="text-[16px] md:text-[18px] my-[5px]"
            >
              contact@gdschcmut.dev
            </a>
          </div>
          <div className="flex flex-col text-gdscGrey-800 mt-[60px]">
            <p className="mb-[5px] mt-[-5px] text-[18px] md:text-[24px] font-bold ">
              Follow
            </p>
            <a
              className="social-media"
              href="https://www.facebook.com/dscxhcmut"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="social-media"
              href="https://discord.gg/VMEkx5xCZg"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            <a
              className="social-media"
              href="https://www.linkedin.com/company/developer-student-clubs-hcmut/mycompany/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
