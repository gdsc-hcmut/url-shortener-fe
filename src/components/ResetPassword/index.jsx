/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable operator-linebreak */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import loadingIcon from 'assets/icons/loading.svg';
import visibilityIcon from 'assets/icons/visibility.svg';
import visibilityOffIcon from 'assets/icons/visibility_off.svg';
import AuthService from 'services/auth.service';

const schema = yup
  .object({
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

export default function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(5);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');
  const mode = searchParams.get('mode');

  const navigate = useNavigate();

  const { error } = useSelector((state) => state.error);
  const { resetPasswordMessage } = useSelector((state) => state.notification);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (mode === 'verifyEmail') {
      navigate(`/verified-email?oobCode=${oobCode}`);
    }
    if (!oobCode) {
      navigate('/');
    }
  });

  useEffect(() => {
    if (counter === 0) {
      navigate('/');
    }
    if (resetPasswordMessage && counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, resetPasswordMessage]);

  useEffect(async () => {
    await AuthService.verifyResetCode(oobCode);
    if (error.resetPassword) {
      navigate('/');
    }
  }, [error.resetPassword]);

  useEffect(() => {
    reset();
  }, [resetPasswordMessage]);

  const onSubmit = async (data) => {
    const { password } = data;

    setLoading(true);
    await AuthService.resetToNewPassword(oobCode, password);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl self-center mb-8 md:mb-7">
        Reset password
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col align-end mb-7">
          <p className="pb-2">New Password</p>
          <div className="flex items-center">
            <input
              id="newPassword"
              className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
            />
            {showPassword ? (
              <label
                aria-hidden
                htmlFor="newPassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
                htmlFor="newPassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
          <span className="text-gdscRed-300 mt-2">
            {errors.password && errors.password.message}
          </span>
        </div>

        <div className="flex flex-col align-end mb-7">
          <p className="pb-2">Confirm Password</p>
          <div className="flex items-center">
            <input
              id="confirmNewPassword"
              className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border
                      focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
            />
            {showConfirmPassword ? (
              <label
                aria-hidden
                htmlFor="confirmNewPassword"
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
                htmlFor="confirmNewPassword"
                className="w-7 h-7 ml-[-40px] inline-block opacity-80 cursor-pointer"
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
          <span className="text-gdscRed-300 mt-2">
            {(errors.confirmPassword && errors.confirmPassword.message) ||
              error.resetPassword}
          </span>
          {resetPasswordMessage && (
            <>
              <span className="text-gdscGreen-300 mt-2">
                {resetPasswordMessage}
              </span>
              <p className="text-gdscGreen-300 mt-2">
                {`Redirect to homepage in ${counter}...`}
              </p>
            </>
          )}
        </div>

        {!loading ? (
          <button
            className="font-normal text-white w-[376px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
            type="submit"
          >
            Change
          </button>
        ) : (
          <button
            className="font-normal text-white w-[376px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
            type="button"
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
    </div>
  );
}
