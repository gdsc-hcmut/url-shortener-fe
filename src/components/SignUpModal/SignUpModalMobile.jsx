import React from 'react';

import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

import LoginWithGoogle from './LoginWithGoogle';
import SignUpForm from './SignUpForm';

export default function SignUpModalMobile() {
  return (
    <div>
      <NavBar isModalPage />
      <div className="flex flex-col justify-center items-center mt-[60px] px-5">
        <SignUpForm />
        <div className="mt-[28px] h-10 self-center flex items-center">
          <div className="w-[170px] h-px bg-gdscGrey-200 mr-1" />
          or
          <div className="w-[170px] h-px bg-gdscGrey-200 ml-1" />
        </div>
        <LoginWithGoogle />
      </div>
      <Footer />
    </div>
  );
}
