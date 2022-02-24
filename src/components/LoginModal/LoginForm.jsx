import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';

import { SHOW_LOG_IN_MODAL, SHOW_FORGOT_PASSWORD_MODAL } from 'action-types';
import { login } from 'actions/auth';
import loadingIcon from 'assets/icons/loading.svg';

export default function LoginForm() {
  const { LogInModal } = useSelector((state) => state.showModal);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const store = useStore();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
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

  const handleValidation = () => {
    const newErrors = {};
    let formIsValid = true;

    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      formIsValid = false;
      newErrors.email = 'Email is not valid.';
    }

    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email cannot be empty.';
    }

    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password cannot be empty.';
    }

    if (password.length < 6) {
      formIsValid = false;
      newErrors.password = 'Password should be at least 6 characters.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      setLoading(true);
      await dispatch(login(email, password));
      const reduxState = store.getState();
      setLoading(reduxState.auth.loading);
    }
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
          value={email}
          onChange={handleEmail}
        />
        <span className="text-gdscRed-300 mt-2">
          {errors.email || error.signIn.email}
        </span>
      </div>

      <div className="flex flex-col align-end mb-7">
        <p className="pb-2">Password</p>
        <input
          className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <span className="text-gdscRed-300 mt-2">
          {errors.password || error.signIn.password}
        </span>
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
      {!loading ? (
        <button
          className="font-normal text-white w-[376px] md:w-full h-[60px]
          bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out mb-7"
          type="submit"
        >
          Log In
        </button>
      ) : (
        <button
          type="button"
          className="font-normal text-white w-[376px] md:w-full h-[60px]
          bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out mb-7"
          disabled
        >
          <img
            src={loadingIcon}
            className="inline mr-3 w-6 h-6 animate-spin"
            alt="Loading indicator"
          />
        </button>
      )}
    </form>
  );
}
