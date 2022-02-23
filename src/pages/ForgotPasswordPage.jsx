import { motion } from 'framer-motion';
import React from 'react';

import transitionAnimation from 'animations';
import ForgotPasswordMobile from 'components/ForgotPassword/ForgotPasswordMobile';

export default function ForgotPasswordPage() {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={transitionAnimation.pageTransition}
      transition={transitionAnimation.transitionDuration}
    >
      <ForgotPasswordMobile />
    </motion.div>
  );
}
