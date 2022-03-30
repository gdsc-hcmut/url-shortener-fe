/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch, useStore } from 'react-redux';
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

export default function ChangePasswordMobile() {
  const { error } = useSelector((state) => state.error);
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const store = useStore();
  const [notification, setNotification] = useState(
    store.getState().auth.user.passwordCreated,
  );
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
    setNotification(true);
    dispatch({
      type: SHOW_GOOGLE_LOADING_ANIMATION,
      payload: false,
    });
    if (!reduxState.error.error.signIn.password) {
      reset();
    }
  };
  useEffect(() => {
    reset();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center md:hidden">
      <h1 className="font-bold text-2xl self-center mb-8 md:mb-7">
        Change password
      </h1>
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <div className="flex flex-col align-end mb-5">
          <p className="pb-2">Old Password</p>
          <div className="flex items-center">
            <input
              id="oldpassword"
              {...register('oldPassword')}
              className="w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300 px-5 outline-none rounded"
              type={showOldPassword ? 'text' : 'password'}
            />
            {showOldPassword ? (
              <label
                aria-hidden
                htmlFor="oldpassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
                htmlFor="oldpassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
        </div>
        <div className="flex flex-col align-end mb-5">
          <p className="pb-2">New Password</p>
          <div className="flex items-center">
            <input
              id="newpassword"
              {...register('newPassword')}
              className="w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showNewPassword ? 'text' : 'password'}
            />
            {showNewPassword ? (
              <label
                aria-hidden
                htmlFor="newpassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
                htmlFor="newpassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
        </div>
        <div className="flex flex-col align-end mb-5">
          <p className="pb-2">Confirm Password</p>
          <div className="flex items-center">
            <input
              id="confirmPassword"
              {...register('confirmPassword')}
              className="w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showConfirmPassword ? 'text' : 'password'}
            />
            {showConfirmPassword ? (
              <label
                aria-hidden
                htmlFor="confirmPassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
        </div>
        {!loading ? (
          <button
            className="font-normal text-white w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
            type="submit"
          >
            Update
          </button>
        ) : (
          <button
            className="font-normal text-white w-[300px] sm:w-[376px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
            type="submit"
          >
            <img
              src={loadingIcon}
              className="inline w-6 h-6 animate-spin"
              alt="Loading indicator"
            />
          </button>
        )}
      </form>
      {!notification && (
        <p className="text-gdscBlue-300 px-[60px] mt-4 font-bold">
          Since you sign up as a user via your Google account, you can input
          freely in the old password field (but must has least 6 characters) the
          first time you attempt to change the password. When click on update,
          the content of the new password field will officially become your
          account&#39;s password.
        </p>
      )}
    </div>
  );
}
