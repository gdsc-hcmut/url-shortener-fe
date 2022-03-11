/* eslint-disable operator-linebreak */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { SHOW_LOG_IN_MODAL, SHOW_FORGOT_PASSWORD_MODAL } from 'action-types';
import { login } from 'actions/auth';
import loadingIcon from 'assets/icons/loading.svg';
import visibilityIcon from 'assets/icons/visibility.svg';
import visibilityOffIcon from 'assets/icons/visibility_off.svg';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email is not valid.')
      .max(255, 'Max length is 255 characters.')
      .required('Email is required.'),
    password: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.'),
  })
  .required();

export default function LoginForm() {
  const { LogInModal } = useSelector((state) => state.showModal);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [showPassword, setShowPassword] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    setLoading(true);
    await dispatch(login(email, password));
    const reduxState = store.getState();
    setLoading(reduxState.auth.loading);
  };

  const isMobile = width <= 768;

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
    reset();
  }, [LogInModal]);

  return (
    <form className="mx-5" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="flex flex-col align-end mb-7">
        <p className="pb-2">Email</p>
        <input
          className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          {...register('email')}
        />
        <span className="text-gdscRed-300 mt-2 w-[376px] md:w-[420px]">
          {(errors.email && errors.email.message) || error.signIn.email}
        </span>
      </div>

      <div className="flex flex-col align-end mb-7">
        <p className="pb-2">Password</p>
        <div className="flex items-center">
          <input
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
          />
          {showPassword ? (
            <img
              aria-hidden
              src={visibilityIcon}
              className="w-7 h-7 ml-[-40px] cursor-pointer"
              alt="Show password Icon"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <img
              aria-hidden
              src={visibilityOffIcon}
              className="w-7 h-7 ml-[-40px] cursor-pointer"
              alt="Hide password Icon"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <span className="text-gdscRed-300 mt-2 w-[376px] md:w-[420px]">
          {(errors.password && errors.password.message) ||
            error.signIn.password}
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
