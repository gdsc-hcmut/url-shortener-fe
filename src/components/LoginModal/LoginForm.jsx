import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login } from 'actions/auth';

export default function LoginForm() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  if (isAuthenticated) console.log('Sign in success');
  return (
    <form onSubmit={handleSignIn}>
      <div className="flex flex-col align-end mb-7">
        <p className="pb-2">Email</p>
        <input
          className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          type="email"
          placeholder="Ali Tuf..."
          required
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="flex flex-col align-end mb-7">
        <p className="pb-2">Password</p>
        <input
          className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          type="password"
          placeholder="••••••"
          required
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="mb-10 md:mb-7 text-right">
        <a href=" ">Forgot your password?</a>
      </div>
      <button
        className="font-normal text-white w-[376px] md:w-full h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out mb-7"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
}
