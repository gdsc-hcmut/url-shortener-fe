import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SHOW_LOG_IN_MODAL, SHOW_SIGN_UP_MODAL } from 'action-types';
import { register } from 'actions/auth';

export default function SignUpForm({ isMobile }) {
  const { SignupModal } = useSelector((state) => state.showModal);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

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

    if (!confirmPassword) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password cannot be empty.';
    }

    if (confirmPassword.length < 6) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password should be at least 6 characters.';
    }

    if (confirmPassword !== password) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password mismatch.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      dispatch(register(email, password));
    }
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
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    return () => setErrors({});
  }, [SignupModal]);

  return (
    <form className="flex flex-col justify-center" onSubmit={handleSignUp}>
      <p className="text-2xl md:mt-[-20px] font-bold self-center">Sign up</p>
      <div className="mt-7 px-0 md:px-10">
        <p>Email</p>
        <input
          value={email}
          onChange={handleEmail}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <span className="text-gdscRed-300 mt-2 md:px-10">
        {errors.email || error.signUp.email}
      </span>
      <div className="mt-7 px-0 md:px-10">
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <span className="text-gdscRed-300 mt-2 md:px-10">
        {errors.password || error.signUp.password}
      </span>
      <div className="mt-7 px-0 md:px-10">
        <p>Confirm Password</p>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          className="mt-2 w-[376px] md:w-[420px] h-[60px]
          focus:border focus:border-1 rounded-[8px]
          bg-gdscGrey-100 focus:bg-white focus:outline-gdscBlue-300 p-5"
        />
      </div>
      <span className="text-gdscRed-300 mt-2 md:px-10">
        {errors.confirmPassword}
      </span>
      <button
        type="submit"
        className="w-[376px] md:w-[420px] h-[60px] bg-gdscBlue-300 mt-7 self-center
        rounded-[8px] text-white hover:bg-shorten-btn-hover transition-all ease-out duration-300"
      >
        Register
      </button>
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
