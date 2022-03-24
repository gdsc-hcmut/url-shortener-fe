/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { SHOW_LOG_IN_MODAL, SHOW_SIGN_UP_MODAL } from 'action-types';
import { signup } from 'actions/auth';
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
    confirmPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.')
      .oneOf([yup.ref('password'), null], 'Passwords must match.'),
  })
  .required();

export default function SignUpForm({ isMobile }) {
  const { SignupModal } = useSelector((state) => state.showModal);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    await dispatch(signup(email, password));
    const reduxState = store.getState();
    setLoading(reduxState.auth.loading);
  };

  const switchToLogIn = () => {
    dispatch({
      type: SHOW_SIGN_UP_MODAL,
      payload: false,
    });
    dispatch({
      type: SHOW_LOG_IN_MODAL,
      payload: true,
    });
  };

  useEffect(() => {
    reset();
  }, [SignupModal]);

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-2xl md:mt-[-20px] font-bold self-center">Sign up</p>
      <div className="mt-7 px-0 md:px-10">
        <p>Email</p>
        <input
          {...register('email')}
          className="mt-2 w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <span className="text-gdscRed-300 mt-2 md:px-10">
        {(errors.email && errors.email.message) || error.signUp.email}
      </span>
      <div className="mt-7 px-0 md:px-10">
        <p>Password</p>
        <div className="flex items-center">
          <input
            id="inputPassword"
            className="mt-2 w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
                      focus:border focus:border-1 rounded-[8px]
                      bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
          />
          {showPassword ? (
            <label
              aria-hidden
              htmlFor="inputPassword"
              className="w-7 h-7 ml-[-40px] mt-2 inline-block opacity-80 cursor-pointer"
              onClick={() => setShowPassword(false)}
            >
              <img
                src={visibilityIcon}
                className="w-7 h-7 pointer-events-none"
                alt="Show password Icon"
              />
            </label>
          ) : (
            <label
              aria-hidden
              htmlFor="inputPassword"
              className="w-7 h-7 ml-[-40px] mt-2 inline-block opacity-80 cursor-pointer"
              onClick={() => setShowPassword(true)}
            >
              <img
                src={visibilityOffIcon}
                className="w-7 h-7 pointer-events-none"
                alt="Hide password Icon"
              />
            </label>
          )}
        </div>
      </div>
      <span className="text-gdscRed-300 mt-2 md:px-10">
        {(errors.password && errors.password.message) || error.signUp.password}
      </span>
      <div className="mt-7 px-0 md:px-10">
        <p>Confirm Password</p>
        <div className="flex items-center">
          <input
            id="confirmPassword"
            className="mt-2 w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
            focus:border focus:border-1 rounded-[8px]
            bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword')}
          />
          {showConfirmPassword ? (
            <label
              aria-hidden
              htmlFor="confirmPassword"
              className="w-7 h-7 ml-[-40px] mt-2 inline-block opacity-80 cursor-pointer"
              onClick={() => setShowConfirmPassword(false)}
            >
              <img
                src={visibilityIcon}
                className="w-7 h-7 pointer-events-none"
                alt="Show password Icon"
              />
            </label>
          ) : (
            <label
              aria-hidden
              htmlFor="confirmPassword"
              className="w-7 h-7 ml-[-40px] mt-2 inline-block opacity-80 cursor-pointer"
              onClick={() => setShowConfirmPassword(true)}
            >
              <img
                src={visibilityOffIcon}
                className="w-7 h-7 pointer-events-none"
                alt="Hide password Icon"
              />
            </label>
          )}
        </div>
      </div>
      <span className="text-gdscRed-300 mt-2 md:px-10">
        {(errors.confirmPassword && errors.confirmPassword.message) ||
          error.signUp.confirmPassword}
      </span>
      {!loading ? (
        <button
          className="w-[300px] sm:w-[376px] md:w-[420px] h-[60px] bg-gdscBlue-300 mt-7 self-center
          rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
          type="submit"
        >
          Register
        </button>
      ) : (
        <button
          type="button"
          className="w-[300px] sm:w-[376px] md:w-[420px] h-[60px] bg-gdscBlue-300 mt-7 self-center
          rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
          disabled
        >
          <img
            src={loadingIcon}
            className="inline mr-3 w-6 h-6 animate-spin"
            alt="Loading indicator"
          />
        </button>
      )}
      {isMobile ? (
        <Link to="/sign-in" className="self-center">
          <button type="button" className="mt-7 text-base">
            Already have an account?
            <b className="active:underline"> Login</b>
          </button>
        </Link>
      ) : (
        <button
          type="button"
          onClick={switchToLogIn}
          className="mt-7 self-center text-base"
        >
          Already have an account?
          <b className="active:underline"> Login</b>
        </button>
      )}
    </form>
  );
}
SignUpForm.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
