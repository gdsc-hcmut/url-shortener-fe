import React, { useState } from 'react';

import MordalUrl from 'components/ModalUrl';

export default function ModalPage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Show Modal
      </button>
      <MordalUrl title="My Modal" onClose={() => setShow(false)} show={show} />
    </div>
  );
}
