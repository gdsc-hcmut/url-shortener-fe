import React, { useState } from 'react';

import SignUpDesktopn from 'components/SignUpModal';
import SignUpModalMobile from 'components/SignUpModal/SignUpModalMobile';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="hidden md:block"
      >
        Get started
      </button>
      <SignUpDesktopn
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
      />
      <div className="md:hidden">
        <SignUpModalMobile />
      </div>
    </div>
  );
}
