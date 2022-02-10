import React from 'react';

export default function ChangePassDesktop() {
  return (
    <div className="hidden md:block ml-[60px] mr-[60px] mt-[64px]">
      <h1 className="text-[32px] font-medium">Change Password</h1>
      <div className="mt-[88px] w-full h-[564px] bg-white rounded-[8px] px-8 pt-10">
        <h1 className="text-xl font-medium">Change Password</h1>
        <form className="mt-9 flex flex-col">
          <p>Old Password</p>
          <input
            type="password"
            placeholder="••••••"
            className="mt-4 h-[60px]
          bg-gdscGrey-100 focus:bg-white focus:border
            focus:border-1 focus:border-gdscBlue-300 px-5 outline-none rounded"
          />
          <p className="mt-6">New Password</p>
          <input
            type="password"
            placeholder="••••••"
            className="mt-4 h-[60px]
          bg-gdscGrey-100 focus:bg-white focus:border
            focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          />
          <p className="mt-6">Confirm Password</p>
          <input
            type="password"
            placeholder="••••••"
            className="mt-4 h-[60px]
          bg-gdscGrey-100 focus:bg-white focus:border
            focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          />
          <button
            type="submit"
            className="w-[152px] h-[52px] text-white mt-9 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
