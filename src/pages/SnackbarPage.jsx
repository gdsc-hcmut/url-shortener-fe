import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleSnackbarOpen } from 'actions/notification';
import Snackbar from 'components/Snackbar';

export default function SnackbarPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(toggleSnackbarOpen())}>
        Show Snackbar
      </button>
      <div className="flex justify-center items-center border border-black w-screen h-[400px]">
        <Snackbar />
      </div>
    </div>
  );
}
