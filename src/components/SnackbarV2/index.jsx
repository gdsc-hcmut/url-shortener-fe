import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CloseIcon } from 'assets/icons/close_icon_snackbar.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_snackbar.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/success_icon.svg';
import { ReactComponent as WarningIcon } from 'assets/icons/warning_icon.svg';

const type = {
  success: <SuccessIcon />,
  delete: <DeleteIcon />,
  warning: <WarningIcon />,
};

export default function Snackbar({ setShowSnackbar, snackbarType, message }) {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="animate-fadeinout relative w-[300px] sm:w-[376px] h-[92px] p-5 flex bg-white rounded items-center shadow-md border-t z-50">
        {type[snackbarType]}
        <div className="ml-[18px]">
          <p className="text-base font-semibold leading-5">{message}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowSnackbar(false)}
          className="w-9 h-9 rounded-full bg-gdscGrey-200 flex
            justify-center items-center absolute right-5 hover:bg-gdscGrey-300
            transition-all duration-300 ease-out"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

Snackbar.propTypes = {
  setShowSnackbar: PropTypes.func.isRequired,
  snackbarType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
