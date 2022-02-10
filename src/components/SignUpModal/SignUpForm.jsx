import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { register } from 'actions/auth';

export default function SignUpForm() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [match, setMatch] = useState(true);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSignUp = (e) => {
    if (password === confirmPassword) {
      e.preventDefault();
      setMatch(true);
      dispatch(register(email, password));
    } else {
      e.preventDefault();
      setMatch(false);
    }
  };
  if (isAuthenticated) console.log('Sign up success');
  return (
    <form className="flex flex-col justify-center" onSubmit={handleSignUp}>
      <p className="text-2xl md:mt-[-20px] font-bold self-center">Sign up</p>
      <div className="mt-7 px-0 md:px-10">
        <p>Email</p>
        <input
          type="email"
          placeholder="Ali Tuf..."
          required
          value={email}
          onChange={handleEmail}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <div className="mt-7 px-0 md:px-10">
        <p>Password</p>
        <input
          type="password"
          placeholder="••••••"
          required
          value={password}
          onChange={handlePassword}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <div className="mt-7 px-0 md:px-10">
        <p>Confirm Password</p>
        <input
          type="password"
          placeholder="••••••"
          required
          value={confirmPassword}
          onChange={handleConfirmPassword}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      {!match ? (
        <p className="text-gdscRed-200 mt-2 md:px-10">Password mismatch</p>
      ) : (
        <div> </div>
      )}
      <button
        type="submit"
        className="w-[376px] md:w-[420px] h-[60px] bg-gdscBlue-300 mt-7 self-center
        rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
      >
        Register
      </button>
      <a href=" " className="mt-7 self-center text-base">
        Already have an account?
        {' '}
        <b className="active:underline">Login</b>
      </a>
    </form>
  );
}
