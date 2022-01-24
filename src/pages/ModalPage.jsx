import React, { useState } from 'react';

import LoginModal from 'components/LoginModal';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Show Modal
      </button>
      <LoginModal title="My Modal" onClose={() => setShow(false)} show={show} />
    </div>
  );
}
