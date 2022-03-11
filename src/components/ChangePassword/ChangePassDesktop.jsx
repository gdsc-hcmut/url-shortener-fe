import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { changePassword } from 'actions/user';
import loadingIcon from 'assets/icons/loading.svg';
import visibilityIcon from 'assets/icons/visibility.svg';
import visibilityOffIcon from 'assets/icons/visibility_off.svg';

export default function ChangePassDesktop() {
  const { error } = useSelector((state) => state.error);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
          <div className="flex items-center">
            <input
              value={oldPassword}
              onChange={handleOldPassword}
              className="w-full mt-4 h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300 px-5 outline-none rounded"
              type={showOldPassword ? 'text' : 'password'}
            />
            {showOldPassword ? (
              <img
                aria-hidden
                src={visibilityIcon}
                className="w-7 h-7 ml-[-40px] mt-4 cursor-pointer"
                alt="Show password Icon"
                onClick={() => setShowOldPassword(false)}
              />
            ) : (
              <img
                aria-hidden
                src={visibilityOffIcon}
                className="w-7 h-7 ml-[-40px] mt-4 cursor-pointer"
                alt="Hide password Icon"
                onClick={() => setShowOldPassword(true)}
              />
            )}
          </div>
          <span className="text-gdscRed-300 mt-2">
            {errors.oldPassword || error.signIn.password}
          </span>
          <p className="mt-4">New Password</p>
          <div className="flex items-center">
            <input
              value={newPassword}
              onChange={handleNewPassword}
              className="mt-4 w-full h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showNewPassword ? 'text' : 'password'}
            />
            {showNewPassword ? (
              <img
                aria-hidden
                src={visibilityIcon}
                className="w-7 h-7 ml-[-40px] mt-4 cursor-pointer"
                alt="Show password Icon"
                onClick={() => setShowNewPassword(false)}
              />
            ) : (
              <img
                aria-hidden
                src={visibilityOffIcon}
                className="w-7 h-7 ml-[-40px] mt-4 cursor-pointer"
                alt="Hide password Icon"
                onClick={() => setShowNewPassword(true)}
              />
            )}
          </div>
          <span className="text-gdscRed-300 mt-2">{errors.newPassword}</span>
          <p className="mt-4">Confirm Password</p>
          <div className="flex items-center">
            <input
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className="mt-4 w-full h-[60px]
            bg-gdscGrey-100 focus:bg-white focus:border
              focus:border-1 focus:border-gdscBlue-300  px-5 outline-none rounded"
              type={showConfirmPassword ? 'text' : 'password'}
            />
            {showConfirmPassword ? (
              <img
                aria-hidden
                src={visibilityIcon}
                className="w-7 h-7 ml-[-40px] mt-4 cursor-pointer"
                alt="Show password Icon"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <img
                aria-hidden
                src={visibilityOffIcon}
                className="w-7 h-7 ml-[-40px] mt-4 cursor-pointer"
                alt="Hide password Icon"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>
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
