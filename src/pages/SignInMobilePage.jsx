import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import transitionAnimation from 'animations';
import LoginModalMobile from 'components/LoginModal/LoginModalMobile';

export default function SignInMobilePage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={transitionAnimation.pageTransition}
      transition={transitionAnimation.transitionDuration}
    >
      <div className="md:hidden">
        <LoginModalMobile />
      </div>
    </motion.div>
  );
}
