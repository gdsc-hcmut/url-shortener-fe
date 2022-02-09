import React from 'react';

import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

import LoginForm from './LoginForm';
import LoginWithGoogle from './LoginWithGoogle';

export default function LoginModalMobile() {
  return (
    <div>
      <NavBar isModalPage />
      <div className="flex flex-col justify-center items-center mt-[92px]">
        <h1 className="text-2xl font-bold mb-7 self-center">Login</h1>
        <LoginForm />
        <a href=" " className="mb-7">
          {"Don't have an account? "}
          <button type="button" className="active:underline font-bold">
            Sign up
          </button>
        </a>
        <LoginWithGoogle />
      </div>
      <Footer />
    </div>
  );
}
