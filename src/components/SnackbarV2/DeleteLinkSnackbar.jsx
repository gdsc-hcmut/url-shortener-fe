import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CloseIcon } from 'assets/icons/close_icon_snackbar.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_snackbar.svg';

export default function DeleteLinkSnackbar({ setShowSnackbar }) {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="animate-fadeinout relative w-[300px] sm:w-[376px] h-[92px] p-5 flex bg-white rounded items-center shadow-md border-t z-50">
        <DeleteIcon />
        <div className="ml-[18px]">
          <p className="text-base font-semibold leading-5">LINK DELETED</p>
        </div>
        <button
          type="button"
          onClick={() => setShowSnackbar(false)}
          className="w-9 h-9 rounded-full bg-gdscGrey-200 fle
          x justify-center items-center absolute right-5 hover:bg-gdscGrey-300
           transition-all duration-300 ease-out"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

DeleteLinkSnackbar.propTypes = {
  setShowSnackbar: PropTypes.func.isRequired,
};
