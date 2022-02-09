import React from 'react';

import LoginModalMobile from 'components/LoginModal/LoginModalMobile';

export default function App() {
  return (
    <div>
      <div className="md:hidden">
        <LoginModalMobile />
      </div>
    </div>
  );
}
