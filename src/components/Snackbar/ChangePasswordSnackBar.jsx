import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleChangePasswordSnackbarClose } from 'actions/notification';
import { ReactComponent as CloseIcon } from 'assets/icons/close_icon_snackbar.svg';
import SuccessIcon from 'assets/icons/success_icon.svg';

export default function ChangePasswordSnackbar() {
  const dispatch = useDispatch();

  const { showChangePasswordSnackbar } = useSelector(
    (state) => state.notification,
  );
  let TIMER;
  const handleTimeout = () => {
    TIMER = setTimeout(() => {
      dispatch(toggleChangePasswordSnackbarClose());
    }, 3000);
  };

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleChangePasswordSnackbarClose());
  }

  useEffect(() => {
    if (showChangePasswordSnackbar) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [showChangePasswordSnackbar, TIMER]);

  return (
    showChangePasswordSnackbar && (
      <div className="animate-fadeinout relative w-[376px] h-[92px] p-5 flex bg-white rounded items-center shadow-md border-t z-50">
        <img
          className="h-[52px] w-[52px]"
          src={SuccessIcon}
          alt="success icon"
        />
        <div className="ml-[18px]">
          <p className="text-base font-semibold leading-5">PASSWORD CHANGED</p>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="w-9 h-9 rounded-full bg-gdscGrey-200 flex justify-center items-center absolute right-5 hover:bg-gdscGrey-300 transition-all duration-300 ease-out"
        >
          <CloseIcon />
        </button>
      </div>
    )
  );
}
