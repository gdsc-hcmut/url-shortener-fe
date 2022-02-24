import React from 'react';

import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

import ForgotPasswordForm from './ForgotPasswordForm';

export default function ForgotPasswordMobile() {
  return (
    <div className="md:hidden">
      <NavBar home={false} />
      <div className="flex justify-center items-center mt-[100px] px-5 mb-[120px]">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  );
}
