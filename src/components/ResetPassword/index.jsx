import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPasswordForm() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl self-center mb-8 md:mb-7">
        Reset password
      </h1>
      <form>
        <div className="flex flex-col align-end mb-7">
          <p className="pb-2">New Password</p>
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
        <Link to="/user-home">
          <button
            className="font-normal text-white w-[376px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
            type="submit"
          >
            Change
          </button>
        </Link>
      </form>
    </div>
  );
}
