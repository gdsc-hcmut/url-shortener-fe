import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

import transitionAnimation from 'animations';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

import LoginForm from './LoginForm';
import LoginWithGoogle from './LoginWithGoogle';

export default function LoginModalMobile() {
  return (
    <div>
      <NavBar home={false} />
      <motion.div
        className="flex flex-col justify-center items-center mt-[92px]"
        initial="out"
        animate="in"
        exit="out"
        variants={transitionAnimation.bodyTransition}
        transition={transitionAnimation.transitionDuration}
      >
        <h1 className="text-2xl font-bold mb-7 self-center">Login</h1>
        <LoginForm />
        <Link to="/sign-up">
          <p className="mb-7">
            {"Don't have an account? "}
            <button type="button" className="active:underline font-bold">
              Sign up
            </button>
          </p>
        </Link>
        <LoginWithGoogle />
      </motion.div>
      <Footer />
    </div>
  );
}
