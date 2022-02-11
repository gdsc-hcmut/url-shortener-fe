import React, { useState } from 'react';

import DeleteModal from 'components/DeleteModal';

export default function DeleteModalPage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShow(true)}>
        Show Modal
      </button>
      <DeleteModal
        text="The shortened link and all relevant data will be removed."
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
}
