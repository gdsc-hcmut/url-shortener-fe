/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as yup from 'yup';

import { SHOW_GOOGLE_LOADING_ANIMATION } from 'action-types';
import { changePassword } from 'actions/user';
import loadingIcon from 'assets/icons/loading.svg';
import visibilityIcon from 'assets/icons/visibility.svg';
import visibilityOffIcon from 'assets/icons/visibility_off.svg';

const schema = yup
  .object({
    oldPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.'),
    newPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.'),
    confirmPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.')
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match.'),
  })
  .required();

export default function ChangePassDesktop() {
  const { error } = useSelector((state) => state.error);
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const store = useStore();
  const auth = getAuth();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleChangePassword = async (data, e) => {
    e.preventDefault();
    console.log(auth.currentUser);
    dispatch({
      type: SHOW_GOOGLE_LOADING_ANIMATION,
      payload: true,
    });
    const { oldPassword, newPassword } = data;
    setLoading(true);
    await dispatch(changePassword(newPassword, oldPassword));
    const reduxState = store.getState();
    setLoading(reduxState.auth.loading);
    dispatch({
      type: SHOW_GOOGLE_LOADING_ANIMATION,
      payload: false,
    });
    console.log(!reduxState.error.error.signIn.password);
    if (!reduxState.error.error.signIn.password) {
      reset();
    }
  };
  useEffect(() => {
    reset();
  }, []);
  return (
    <div className="hidden md:block ml-[60px] mr-[60px] mt-10">
      <h1 className="text-[32px] font-medium">Change Password</h1>
      <div className="mt-[88px] w-full bg-white rounded-[8px] px-8 pt-10">
        <h1 className="text-xl font-medium">Change Password</h1>
        <form
          className="mt-9 flex flex-col"
          onSubmit={handleSubmit(handleChangePassword)}
        >
          <p>Old Password</p>
          <div className="flex items-center">
            <input
              id="oldPassword"
              {...register('oldPassword')}
              className="w-full mt-4 h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300 px-5 outline-none rounded"
              type={showOldPassword ? 'text' : 'password'}
            />
            {showOldPassword ? (
              <label
                aria-hidden
                htmlFor="oldPassword"
                className="w-7 h-7 ml-[-40px] mt-4 inline-block opacity-80 cursor-pointer"
                onClick={() => setShowOldPassword(false)}
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
                htmlFor="oldPassword"
                className="w-7 h-7 ml-[-40px] mt-4 inline-block opacity-80 cursor-pointer"
                onClick={() => setShowOldPassword(true)}
              >
                <img
                  src={visibilityOffIcon}
                  className="w-7 h-7 pointer-events-none"
                  alt="Hide password Icon"
                />
              </label>
            )}
          </div>
          <span className="text-gdscRed-300 mt-2">
            {(errors.oldPassword && errors.oldPassword.message)
              || error.signIn.password}
          </span>
          <p className="mt-4">New Password</p>
          <div className="flex items-center">
            <input
              id="newPassword"
              {...register('newPassword')}
              className="mt-4 w-full h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showNewPassword ? 'text' : 'password'}
            />
            {showNewPassword ? (
              <label
                aria-hidden
                htmlFor="newPassword"
                className="w-7 h-7 ml-[-40px] mt-4 inline-block opacity-80 cursor-pointer"
                onClick={() => setShowNewPassword(false)}
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
                htmlFor="newPassword"
                className="w-7 h-7 ml-[-40px] mt-4 inline-block opacity-80 cursor-pointer"
                onClick={() => setShowNewPassword(true)}
              >
                <img
                  src={visibilityOffIcon}
                  className="w-7 h-7 pointer-events-none"
                  alt="Hide password Icon"
                />
              </label>
            )}
          </div>
          <span className="text-gdscRed-300 mt-2">
            {errors.newPassword && errors.newPassword.message}
          </span>
          <p className="mt-4">Confirm Password</p>
          <div className="flex items-center">
            <input
              id="ConfirmPassword"
              {...register('confirmPassword')}
              className="mt-4 w-full h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showConfirmPassword ? 'text' : 'password'}
            />
            {showConfirmPassword ? (
              <label
                aria-hidden
                htmlFor="ConfirmPassword"
                className="w-7 h-7 ml-[-40px] mt-4 inline-block opacity-80 cursor-pointer"
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
                htmlFor="ConfirmPassword"
                className="w-7 h-7 ml-[-40px] mt-4 inline-block opacity-80 cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              >
                <img
                  src={visibilityOffIcon}
                  className="w-7 h-7 pointer-events-none"
                  alt="Show password Icon"
                />
              </label>
            )}
          </div>
          <span className="text-gdscRed-300 mt-2">
            {errors.confirmPassword && errors.confirmPassword.message}
          </span>
          <div className="flex">
            {!loading ? (
              <button
                type="submit"
                className="w-[152px] h-[52px] text-white mt-7 mb-7 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="w-[152px] h-[52px] text-white mt-7 mb-7 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
                disabled
              >
                <img
                  src={loadingIcon}
                  className="inline w-6 h-6 animate-spin"
                  alt="Loading indicator"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
