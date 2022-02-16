import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SHOW_LOG_IN_MODAL, SHOW_FORGOT_PASSWORD_MODAL } from 'action-types';
import { login } from 'actions/auth';

export default function LoginForm() {
  const { LogInModal } = useSelector((state) => state.showModal);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: false,
    });
    dispatch(login(email, password));
  };
  const showForgotPassword = () => {
    dispatch({
      type: SHOW_FORGOT_PASSWORD_MODAL,
      payload: true,
    });
    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: false,
    });
  };
  if (isAuthenticated) window.location = 'http://localhost:3000/user-home';
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [LogInModal]);
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
      {isMobile ? (
        <div className="mb-10 md:mb-7 text-right">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      ) : (
        <div className="mb-10 md:mb-7 text-right">
          <button type="button" onClick={showForgotPassword}>
            Forgot your password?
          </button>
        </div>
      )}
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
