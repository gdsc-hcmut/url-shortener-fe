import React, { useState } from 'react';

import LoginModal from 'components/LoginModal';
import LoginModalMobile from 'components/LoginModal/LoginModalMobile';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="hidden md:block">
        <button type="button" onClick={() => setShow(true)}>
          Show Modal
        </button>
        <LoginModal
          title="Login Modal"
          onClose={() => setShow(false)}
          show={show}
        />
      </div>
      <div className="md:hidden">
        <LoginModalMobile />
      </div>
    </div>
  );
}
