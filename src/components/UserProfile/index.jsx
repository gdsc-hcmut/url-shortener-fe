import React from 'react';

import UserFormDesktop from './UserFormDesktop';
import UserFormMobile from './UserFormMobile';

export default function UserProfile() {
  return (
    <div>
      <UserFormMobile />
      <UserFormDesktop />
    </div>
  );
}
