import React from 'react';

import Footer from 'components/Footer';
import NavbarLogin from 'components/Navbar/NavbarLogin';
import UserProfile from 'components/UserProfile';

export default function UserProfilePage() {
  return (
    <div className="flex flex-col justify-center md:items-center bg-white md:bg-blue md:bg-contain">
      <NavbarLogin />
      <div className="mt-5 mb-8 md:mt-[20.981vh] md:mb-[22.428vh]">
        <UserProfile />
      </div>
      <Footer />
    </div>
  );
}
