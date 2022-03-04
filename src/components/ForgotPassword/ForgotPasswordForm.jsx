import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import loadingIcon from 'assets/icons/loading.svg';
import AuthService from 'services/auth.service';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email is not valid.')
      .max(255, 'Max length is 255 characters.')
      .required('Email is required.'),
  })
  .required();

export default function ForgotPasswordForm() {
  const { ForgotPasswordModal } = useSelector((state) => state.showModal);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email } = data;

    setLoading(true);
    await AuthService.resetPassword(email);
    setLoading(false);
    setShowMessage(true);
  };

  useEffect(() => {
    reset();
    setShowMessage(false);
  }, [ForgotPasswordModal]);

  return (
    <form
      id="forgot-password-form"
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-2xl md:mt-[-20px] font-bold self-center">
        Forgot password
      </p>
      <p className="mt-8 md:mt-6 mx-[68px] w-[376px] md:w-auto text-gdscGrey-500 text-center">
        If you forgot your password, you can request a link to reset your
        password.
      </p>
      <div className="mt-7 md:mt-4 px-0 self-center md:px-10">
        <p>Enter your email to reset password</p>
        <input
          {...register('email')}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
        {errors.email && (
          <p className="text-gdscRed-300 mt-2">{errors.email.message}</p>
        )}
        {showMessage && (
          <p className="text-gdscGreen-300 mt-2 w-[376px] md:w-[420px]">
            Thanks! If we find a matching account, we&apos;ll send you an email.
            Please check your inbox.
          </p>
        )}
      </div>

      <button
        type={loading ? 'button' : 'submit'}
        className="w-[376px] md:w-[420px] h-[60px] bg-gdscBlue-300 mt-7
      rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
        disabled={loading}
      >
        {loading ? (
          <img
            src={loadingIcon}
            className="inline mr-3 w-6 h-6 animate-spin"
            alt="Loading indicator"
          />
        ) : (
          <span>Reset Password</span>
        )}
      </button>
    </form>
  );
}
