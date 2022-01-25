import React from 'react';

export default function SignUpForm() {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-2xl mt-[-20px] font-bold self-center">Sign up</p>
      <form className="mt-[28px] px-10">
        <p>Email</p>
        <input
          type="email"
          placeholder="example@gmail.com"
          required
          className="mt-2 w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </form>
      <form className="mt-[28px] px-10">
        <p>Password</p>
        <input
          type="password"
          placeholder="••••••"
          required
          className="mt-2 w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </form>
      <form className="mt-[28px] px-10">
        <p>Confirm Password</p>
        <input
          type="password"
          placeholder="••••••"
          required
          className="mt-2 w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </form>
      <button
        type="submit"
        className="w-[420px] h-[60px] bg-gdscBlue-300 mt-[28px] ml-10
        rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
      >
        Register
      </button>
      <a href=" " className="mt-[28px] self-center text-[14px]">
        Already have an account?
        {' '}
        <b className="active:underline">Login</b>
      </a>
    </div>
  );
}
