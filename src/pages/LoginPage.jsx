import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import LoginModalMobile from 'components/LoginModal/LoginModalMobile';

export default function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to="/user-home" />;
  }
  return (
    <div>
      <div className="md:hidden">
        <LoginModalMobile />
      </div>
    </div>
  );
}
