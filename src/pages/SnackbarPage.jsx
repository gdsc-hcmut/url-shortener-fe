import React, { useState } from 'react';

import Snackbar from 'components/Snackbar';

export default function SnackbarPage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Show Snackbar
      </button>
      <Snackbar onClose={() => setShow(false)} show={show} />
    </div>
  );
}
