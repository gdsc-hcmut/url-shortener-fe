import React, { useState } from 'react';

import MordalUrl from 'components/ModalUrl';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button type="button" onClick={() => setShow(true)}>
        Show Modal
      </button>
      <MordalUrl title="My Modal" onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </MordalUrl>
    </div>
  );
}
