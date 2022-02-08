import React, { useState } from 'react';

import EditSlugModal from 'components/EditSludModal';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Show Modal
      </button>
      <EditSlugModal slug="\slug1" onClose={() => setShow(false)} show={show} />
    </div>
  );
}
