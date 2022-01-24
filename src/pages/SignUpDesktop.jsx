import React, { useState } from 'react';

import SignUpDesktopn from 'components/SignUpDesktop';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Get started
      </button>
      <SignUpDesktopn
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
}
