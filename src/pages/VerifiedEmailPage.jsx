import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';

import transitionAnimation from 'animations';
import NavBar from 'components/Navbar';
import AuthService from 'services/auth.service';

export default function VerifiedEmailPage() {
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get('oobCode');

  const { error } = useSelector((state) => state.error);

  const navigate = useNavigate();

  useEffect(() => {
    if (!oobCode) {
      navigate('/');
    }
  });

  useEffect(async () => {
    await AuthService.verifyResetCode(oobCode);
    if (error.resetPassword) {
      navigate('/');
    }
  }, [error.resetPassword]);

  return (
    <motion.div
      className="flex flex-col justify-center md:items-center"
      initial="out"
      animate="in"
      exit="out"
      variants={transitionAnimation.pageTransition}
      transition={transitionAnimation.transitionDuration}
    >
      <NavBar home />
      <div className="flex flex-col justify-center items-center w-full h-screen text-2xl text-gdscGreen-300 bg-opacity-0 text-center">
        <span className="text-2xl">
          Your email has been verified successfully!
        </span>
      </div>
    </motion.div>
  );
}
