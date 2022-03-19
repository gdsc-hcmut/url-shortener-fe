import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import GoogleLoadingAnimation from 'components/GoogleStyleLoading';
import LoginModalMobile from 'components/LoginModal/LoginModalMobile';

export default function SignInMobilePage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { GoogleLoading } = useSelector((state) => state.showModal);
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <div className="md:hidden">
        <LoginModalMobile />
      </div>
      <GoogleLoadingAnimation show={GoogleLoading} background={false} />
    </div>
  );
}
