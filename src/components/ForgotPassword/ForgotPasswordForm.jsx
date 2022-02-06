import React from 'react';

export default function ForgotPasswordForm() {
  return (
    <form className="flex flex-col justify-center">
      <p className="text-2xl md:mt-[-20px] font-bold self-center">
        Forgot password
      </p>
      <p className="mt-8 md:mt-6 mx-[68px] w-[376px] md:w-auto text-gdscGrey-300 text-center">
        If you forgot your password, you can request a link to reset your
        password.
      </p>
      <div className="mt-7 md:mt-4 px-0 self-center md:px-10">
        <p>Enter your email to reset password</p>
        <input
          type="email"
          placeholder="example@gmail.com"
          required
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <button
        type="submit"
        className="w-[376px] md:w-[420px] h-[60px] bg-gdscBlue-300 mt-7 self-center
        rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
      >
        Reset Password
      </button>
    </form>
  );
}