import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import transitionAnimation from 'animations';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import DomainBlacklist from 'components/DomainBlacklist';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function DomainBlacklistPage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div
      aria-hidden="true"
      className="max-h-[100vh] detail-page flex flex-col bg-gdscGrey-100"
    >
      <button
        type="button"
        className="absolute md:hidden right-5 top-3 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <Navbar home={false} />
      <div className="flex overflow-x-scroll md:overflow-hidden h-full bg-gdscGrey-100">
        <SideMenu toggle={toggleMenu} page="domain-blacklist" />
        <motion.div
          className="bg-gdscGrey-100 md:min-h-screen flex-1 md:pl-[60px] pl-5 3xl:pl-[60px] md:pt-10 md:pb-[132px] text-2xl font-bold flex overflow-y-hidden"
          initial="out"
          animate="in"
          exit="out"
          variants={transitionAnimation.bodyTransition}
          transition={transitionAnimation.transitionDuration}
        >
          <DomainBlacklist />
        </motion.div>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}
