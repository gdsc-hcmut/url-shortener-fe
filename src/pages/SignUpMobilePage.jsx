import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import GoogleLoadingAnimation from 'components/GoogleStyleLoading';
import SignUpModalMobile from 'components/SignUpModal/SignUpModalMobile';

export default function SignUpMobilePage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { GoogleLoading } = useSelector((state) => state.showModal);
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  if (isMobile) {
    if (isAuthenticated) {
      return <Navigate to="/home" />;
    }
    return (
      <div>
        <SignUpModalMobile />
        <GoogleLoadingAnimation show={GoogleLoading} background={false} />
      </div>
    );
  }
  return <div> </div>;
}
