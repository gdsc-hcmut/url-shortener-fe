import { motion } from 'framer-motion';
import React from 'react';

import transitionAnimation from 'animations';
import NavBar from 'components/Navbar';

export default function NotFoundPage() {
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
      <div className="flex flex-col justify-center items-center w-full h-screen text-5xl text-gdscRed-300 bg-opacity-0 text-center">
        404 Page Not Found
        <span className="text-2xl">
          Your route does not appear to be correct.
        </span>
      </div>
    </motion.div>
  );
}
