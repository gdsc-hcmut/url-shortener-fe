import React from 'react';

export default function ChangePasswordMobile() {
  return (
    <div className="flex flex-col justify-center items-center md:hidden">
      <h1 className="font-bold text-2xl self-center mb-8 md:mb-7">
        Change password
      </h1>
      <form>
        <div className="flex flex-col align-end mb-7">
          <p className="pb-2">Email</p>
          <input
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type="email"
            placeholder="Ali Tuf..."
          />
        </div>
        <div className="flex flex-col align-end mb-7">
          <p className="pb-2">Password</p>
          <input
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type="password"
            placeholder="••••••"
          />
        </div>
        <div className="flex flex-col align-end mb-7">
          <p className="pb-2">Confirm Password</p>
          <input
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type="password"
            placeholder="••••••"
          />
        </div>
        <button
          className="font-normal text-white w-[376px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
          type="submit"
        >
          Change
        </button>
      </form>
    </div>
  );
}
