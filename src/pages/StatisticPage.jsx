import { motion } from 'framer-motion';
import React, { useState } from 'react';

import transitionAnimation from 'animations';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';
import Statistic from 'components/Statistic';

export default function StatisticPage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div aria-hidden="true" className="max-h-[100vh] detail-page flex flex-col">
      <button
        type="button"
        className="absolute md:hidden right-5 top-3 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <Navbar home={false} />
      <div className="flex md:overflow-x-scroll md:overflow-hidden h-full">
        <SideMenu toggle={toggleMenu} page="stat" />
        <div className="bg-gdscGrey-100 md:mt-0 h-full w-full md:h-6 md:min-h-screen flex-1 md:overflow-y-scroll">
          <motion.div
            className="w-full h-full text-2xl "
            initial="out"
            animate="in"
            exit="out"
            variants={transitionAnimation.bodyTransition}
            transition={transitionAnimation.transitionDuration}
          >
            <Statistic />
          </motion.div>
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
