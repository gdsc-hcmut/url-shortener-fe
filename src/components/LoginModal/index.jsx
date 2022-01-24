import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import GoogleLogo from 'assets/icons/GoogleLogo.svg';

export default function LoginModal({ show, onClose }) {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[500px] h-[628px] flex items-center border bg-white rounded px-[40px] py-[32px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="w-full h-full flex flex-col items-center"
        >
          <h1 className="text-2xl font-medium mb-7">Login</h1>
          <form>
            <div className="flex flex-col align-end mb-7">
              <p className="pb-2">Email</p>
              <input
                className="w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                            focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
                type="email"
                placeholder="Ali Tuf..."
              />
            </div>
            <div className="flex flex-col align-end mb-7">
              <p>Password</p>
              <input
                className="w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                            focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
                type="password"
                placeholder="••••••"
              />
            </div>
            <div className="mb-7 text-right">
              <p className="cursor-pointer">Forgot your pasword?</p>
            </div>
            <button
              className="font-normal text-white w-full h-[60px]
                        bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                        transition-all duration-300 ease-out mb-7"
              type="submit"
            >
              Log In
            </button>
          </form>
          <p className="mb-7">
            {"Don't have an account? "}
            <button type="button" className="active:underline font-bold">
              Sign up
            </button>
          </p>
          <div className=" flex flex-col items-center">
            <div className="block text-center overflow-hidden whitespace-nowrap">
              <hr className="inline-block w-[158px] h-[1px]" />
              <span className="inline-block w-[40px] h-[40px]">or</span>
              <hr className="inline-block w-[158px] h-[1px]" />
            </div>
            <button
              className="text-gdscGrey-700 w-[260px] h-[44px]
                        bg-white rounded border border-gdscGrey-200
                        transition-all duration-300 ease-out mb-7 font-bold
                        hover:border-[#FCEAE9] hover:bg-[#FCEAE9]
                        flex flex-row justify-center items-center"
              type="submit"
            >
              <img
                className="w-[16px] h-[16px] mr-2"
                src={GoogleLogo}
                alt="Google Logo"
              />
              {' Log In with Google'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
