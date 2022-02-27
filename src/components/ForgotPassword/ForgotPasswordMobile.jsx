import { motion } from 'framer-motion';
import React from 'react';

import transitionAnimation from 'animations';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordMobile() {
  return (
    <div className="md:hidden">
      <NavBar home={false} />
      <motion.div
        className="flex justify-center items-center mt-[100px] px-5 mb-[120px]"
        initial="out"
        animate="in"
        exit="out"
        variants={transitionAnimation.bodyTransition}
        transition={transitionAnimation.transitionDuration}
      >
        <ForgotPasswordForm />
      </motion.div>
      <Footer />
    </div>
  );
}
