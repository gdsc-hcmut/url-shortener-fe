import React from 'react';

export default function NavbarButton() {
  return (
    <button
      type="button"
      className="bg-gdscBlue-200 ease-out duration-300 hover:bg-login-btn-hover
                bg-opacity-10 text-gdscBlue-300 font-normal hover:bg-opacity-10
                rounded w-[180px] md:w-auto h-auto content-center text-[16px]
                py-[15px] md:my-0 px-[68px] ml-[30px]"
    >
      <p>Login</p>
    </button>
  );
}
