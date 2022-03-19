import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

import transitionAnimation from 'animations';
import Footer from 'components/Footer';
import GoogleLoadingAnimation from 'components/GoogleStyleLoading';
import NavbarHome from 'components/Navbar/NavbarHome';
import ResetPasswordForm from 'components/ResetPassword';

export default function ResetPasswordPage() {
  const { GoogleLoading } = useSelector((state) => state.showModal);
  return (
    <motion.div
      className="flex flex-col justify-center md:items-center bg-white md:bg-contain"
      initial="out"
      animate="in"
      exit="out"
      variants={transitionAnimation.pageTransition}
      transition={transitionAnimation.transitionDuration}
    >
      <nav className="shadow-lg max-w-full h-fit w-full flex px-[20px] py-[20px] md:px-[60px] md:py-[30px] bg-white">
        <div className="flex h-full w-full justify-between align-center">
          <NavbarHome />
        </div>
      </nav>
      <div className="mt-10 mb-[120px] md:mt-[100px] md:mb-[196px]">
        <ResetPasswordForm />
      </div>
      <Footer />
      <GoogleLoadingAnimation show={GoogleLoading} />
    </motion.div>
  );
}
