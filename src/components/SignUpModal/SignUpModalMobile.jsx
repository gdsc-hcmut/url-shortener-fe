import { motion } from 'framer-motion';
import React from 'react';

import transitionAnimation from 'animations';
import Footer from 'components/Footer';
import GoogleLoginButton from 'components/Modals/GoogleLoginButton';
import NavBar from 'components/Navbar';

import SignUpForm from './SignUpForm';

export default function SignUpModalMobile() {
  return (
    <div>
      <NavBar home={false} />
      <motion.div
        className="flex flex-col justify-center items-center mt-[112px] px-5"
        initial="out"
        animate="in"
        exit="out"
        variants={transitionAnimation.bodyTransition}
        transition={transitionAnimation.transitionDuration}
      >
        <SignUpForm isMobile />
        <div className="mt-[28px] h-10 self-center flex items-center">
          <div className="w-[170px] h-px bg-gdscGrey-200 mr-1" />
          or
          <div className="w-[170px] h-px bg-gdscGrey-200 ml-1" />
        </div>
        <GoogleLoginButton />
      </motion.div>
      <Footer />
    </div>
  );
}
