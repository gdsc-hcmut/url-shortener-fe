import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleSnackbarClose } from 'actions/notification';
import { ReactComponent as CloseIcon } from 'assets/icons/close_icon_snackbar.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_snackbar.svg';

export default function DeleteLinkSnackbar() {
  const dispatch = useDispatch();

  const { showSnackbar } = useSelector((state) => state.notification);

  let TIMER;
  const handleTimeout = () => {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, 3000);
  };

  function handleClose() {
    clearTimeout(TIMER);
    dispatch(toggleSnackbarClose());
  }

  useEffect(() => {
    if (showSnackbar) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [showSnackbar, TIMER]);

  return (
    showSnackbar && (
      <div className="animate-fadeinout relative w-[300px] sm:w-[376px] h-[92px] p-5 flex bg-white rounded items-center shadow-md border-t z-50">
        <DeleteIcon />
        <div className="ml-[18px]">
          <p className="text-base font-semibold leading-5">LINK DELETED</p>
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
