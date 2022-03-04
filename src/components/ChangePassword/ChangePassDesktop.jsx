import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { changePassword } from 'actions/user';
import loadingIcon from 'assets/icons/loading.svg';

export default function ChangePassDesktop() {
  const { error } = useSelector((state) => state.error);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const store = useStore();
  const auth = getAuth();
  const dispatch = useDispatch();
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
    console.log(auth.currentUser);
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
    <div className="hidden md:block ml-[60px] mr-[60px] mt-10">
      <h1 className="text-[32px] font-medium">Change Password</h1>
      <div className="mt-[88px] w-full bg-white rounded-[8px] px-8 pt-10">
        <h1 className="text-xl font-medium">Change Password</h1>
        <form className="mt-9 flex flex-col" onSubmit={handleChangePassword}>
          <p>Old Password</p>
          <input
            type="password"
            value={oldPassword}
            onChange={handleOldPassword}
            className="mt-4 h-[60px]
          bg-gdscGrey-100 focus:bg-white focus:border
            focus:border-1 focus:border-gdscBlue-300 px-5 outline-none rounded"
          />
          <span className="text-gdscRed-300 mt-2">
            {errors.oldPassword || error.signIn.password}
          </span>
          <p className="mt-4">New Password</p>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPassword}
            className="mt-4 h-[60px]
          bg-gdscGrey-100 focus:bg-white focus:border
            focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          />
          <span className="text-gdscRed-300 mt-2">{errors.newPassword}</span>
          <p className="mt-4">Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            className="mt-4 h-[60px]
          bg-gdscGrey-100 focus:bg-white focus:border
            focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
          />
          <span className="text-gdscRed-300 mt-2">
            {errors.confirmPassword}
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
