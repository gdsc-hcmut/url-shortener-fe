import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import BackIcon from 'assets/icons/BackIcon.svg';
import GoogleIcon from 'assets/icons/GoogleIcon.svg';
import XButton from 'assets/icons/XButton.svg';

export default function SignUpDesktop({ show, onClose }) {
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
      onKeyDown={closeOnEscapeKeyDown}
    >
      <div
        aria-hidden="true"
        className="w-[500px] h-[692px] flex flex-col border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-3 px-3 flex gap-x-[396px]">
          <button
            type="button"
            className="h-10 w-10 bg-gdscBlue-400 rounded-[8px] p-[14px]"
          >
            <img className="w-3 h-3" src={BackIcon} alt="Back button" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 bg-gdscBlue-400 rounded-[8px] p-[14px]"
          >
            <img className="w-3 h-3" src={XButton} alt="X button" />
          </button>
        </div>
        <p className="text-2xl mt-[-20px] font-bold self-center">Sign up</p>
        <form className="mt-[28px] px-10">
          <p>Email</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            className="mt-2 w-[420px] h-[60px] border rounded-[8px] bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
          />
        </form>
        <form className="mt-[28px] px-10">
          <p>Password</p>
          <input
            type="password"
            placeholder="******"
            required
            className="mt-2 w-[420px] h-[60px] border rounded-[8px] bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
          />
        </form>
        <form className="mt-[28px] px-10">
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="******"
            required
            className="mt-2 w-[420px] h-[60px] border rounded-[8px] bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
          />
        </form>
        <button
          type="submit"
          className="w-[420px] h-[60px] bg-gdscBlue-300 mt-[28px] ml-10 rounded-[8px] text-white hover:bg-shorten-btn-hover ease-out duration-300"
        >
          Register
        </button>
        <a href=" " className="mt-[28px] self-center text-[14px]">
          Already have an account?
          {' '}
          <b>Login</b>
        </a>
        <div className="mt-[28px] h-10 self-center flex items-center">
          <div className="w-[170px] h-px bg-gdscGrey-200 mr-1" />
          or
          <div className="w-[170px] h-px bg-gdscGrey-200 ml-1" />
        </div>
        <button
          type="button"
          className="w-[260px] h-[44px] self-center border rounded-[8px] border-gdscGrey-200 flex justify-center items-center hover:bg-sign-in-with-google ease-out duration-300"
        >
          <img className="w-4 h-4 mr-2" src={GoogleIcon} alt="Google Icon" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

SignUpDesktop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
