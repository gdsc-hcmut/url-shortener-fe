import React, { useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import { changePassword } from 'actions/user';
import loadingIcon from 'assets/icons/loading.svg';

export default function ChangePasswordMobile() {
  const { error } = useSelector((state) => state.error);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const store = useStore();
  const handleOldPassword = (e) => setOldPassword(e.target.value);
  const handleNewPassword = (e) => setNewPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleValidation = () => {
    const newErrors = {};
    let formIsValid = true;

    if (oldPassword.length < 6) {
      formIsValid = false;
      newErrors.oldPassword = 'Password should be at least 6 characters.';
    }

    if (!oldPassword) {
      formIsValid = false;
      newErrors.oldPassword = 'Password cannot be empty.';
    }

    if (newPassword.length < 6) {
      formIsValid = false;
      newErrors.newPassword = 'New password should be at least 6 characters.';
    }

    if (!newPassword) {
      formIsValid = false;
      newErrors.newPassword = 'New Password cannot be empty.';
    }

    if (confirmPassword.length < 6) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password should be at least 6 characters.';
    }

    if (!confirmPassword) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password cannot be empty.';
    }

    if (confirmPassword !== newPassword) {
      formIsValid = false;
      newErrors.confirmPassword = 'Password mismatch.';
    }

    setErrors(newErrors);
    return formIsValid;
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      await dispatch(changePassword(newPassword, oldPassword));
      const reduxState = store.getState();
      setLoading(reduxState.auth.loading);
      if (!reduxState.error.error.signIn.password) {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center md:hidden">
      <h1 className="font-bold text-2xl self-center mb-8 md:mb-7">
        Change password
      </h1>
      <form onSubmit={handleChangePassword}>
        <div className="flex flex-col align-end mb-5">
          <p className="pb-2">Old Password</p>
          <input
            value={oldPassword}
            onChange={handleOldPassword}
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type="password"
          />
          <span className="text-gdscRed-300 mt-2">
            {errors.oldPassword || error.signIn.password}
          </span>
        </div>
        <div className="flex flex-col align-end mb-5">
          <p className="pb-2">New Password</p>
          <input
            value={newPassword}
            onChange={handleNewPassword}
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type="password"
          />
          <span className="text-gdscRed-300 mt-2">{errors.newPassword}</span>
        </div>
        <div className="flex flex-col align-end mb-5">
          <p className="pb-2">Confirm Password</p>
          <input
            value={confirmPassword}
            onChange={handleConfirmPassword}
            className="w-[376px] md:w-[420px] h-[60px] bg-gdscGrey-100 focus:bg-white focus:border focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
            type="password"
          />
          <span className="text-gdscRed-300 mt-2">
            {errors.confirmPassword}
          </span>
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
    </div>
  );
}
