import React from 'react';

import ChangePassDesktop from './ChangePassDesktop';
import ChangePasswordMobile from './ChangePassMobile';

export default function ChangePassword() {
  return (
    <div>
      <ChangePasswordMobile />
      <ChangePassDesktop />
    </div>
  );
}
