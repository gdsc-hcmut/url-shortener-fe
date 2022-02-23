import { motion } from 'framer-motion';
import React, { useState } from 'react';

import transitionAnimation from 'animations';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';
import UserProfile from 'components/UserProfile';

export default function UserProfilePage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <motion.div
      className="max-h-[100vh] detail-page flex flex-col"
      initial="out"
      animate="in"
      exit="out"
      variants={transitionAnimation.pageTransition}
      transition={transitionAnimation.transitionDuration}
    >
      <button
        type="button"
        className="absolute md:hidden right-5 top-3 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <Navbar home={false} />
      <div className="flex md:overflow-x-scroll md:overflow-hidden h-full">
        <SideMenu toggle={toggleMenu} page="my-profile" />
        <div className="bg-white md:bg-gdscGrey-100 mt-[48px] md:mt-0 h-full w-full md:h-6 md:min-h-screen flex-1 md:overflow-y-scroll">
          <div className="pb-[120px] md:pb-[156px]">
            <UserProfile />
          </div>
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
