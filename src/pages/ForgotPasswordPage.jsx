import React, { useState } from 'react';

import ForgotPassword from 'components/ForgotPassword';

export default function ForgotPasswordPage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="hidden md:block"
      >
        Forgot your password?
      </button>
      <ForgotPassword
        title="Forgot password"
        onClose={() => setShow(false)}
        show={show}
      />
    </div>
  );
}
