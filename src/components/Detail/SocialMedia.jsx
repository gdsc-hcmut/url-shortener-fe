import React from 'react';

import { ReactComponent as GlobeIcon } from 'assets/icons/globe_icon.svg';
import { ReactComponent as GraphIcon } from 'assets/icons/graph_icon.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/logo/facebook_logo.svg';
import { ReactComponent as InstagramLogo } from 'assets/icons/logo/instagram_logo.svg';

export default function SocialMedia() {
  return (
    <div className="md:h-[480px] md:w-[504px] w-full px-5 pt-8 pb-12 mb-6 mx-0 lg:mr-6 bg-white rounded">
      <input
        className="w-full h-10 mb-12 bg-[#F0F5F7] hover:bg-white border-[1px] border-[#F0F5F7] focus:border-gdscBlue-300 px-5 outline-none rounded text-base font-light"
        placeholder="Search your URL ..."
      />
      <div className=" h-full flex flex-col">
        <div className="flex items-center h-[52px] ">
          <FacebookLogo />
          <span className="font-normal text-xl ml-3">Facebook</span>
          <span className="font-thin text-base text-gdscGrey-700 ml-auto">
            35 clicks
          </span>
        </div>
        <div className="flex items-center h-[52px] mt-8">
          <div className="">
            <InstagramLogo />
          </div>
          <span className="font-normal text-xl ml-3">Instagram</span>
          <span className="font-thin text-base text-gdscGrey-700 ml-auto">
            35 clicks
          </span>
        </div>
        <div className="flex items-center h-[52px] mt-8">
          <div className="w-[52px] h-[52px] flex justify-center items-center bg-gdscGrey-400 rounded-full">
            <GlobeIcon />
          </div>
          <span className="font-normal text-xl ml-3">Other Social Media</span>
          <span className="font-thin text-base text-gdscGrey-700 ml-auto">
            305 clicks
          </span>
        </div>
        <div className="flex items-center h-[52px] mt-8">
          <div className="w-[52px] h-[52px] flex justify-center items-center  bg-gdscGreen-100 bg-opacity-50 rounded-full">
            <GraphIcon />
          </div>
          <span className="font-normal text-xl ml-3">Total</span>
          <span className="font-thin text-base text-gdscGrey-700 ml-auto">
            305 clicks
          </span>
        </div>
      </div>
    </div>
  );
}
