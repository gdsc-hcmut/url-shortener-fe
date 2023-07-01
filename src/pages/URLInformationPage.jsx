import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

import transitionAnimation from 'animations';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import Detail from 'components/Detail';
import Footer from 'components/Footer';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';
import UserInformation from 'components/UserInformation';

export default function URLInformationPage() {
  const { state } = useLocation();
  const { id, name } = state;
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
        <div className="bg-gdscGrey-100 md:mt-0 w-full h-full md:h-auto flex-1 md:overflow-y-hidden">
          <motion.div
            className="w-full h-full text-2xl "
            initial="out"
            animate="in"
            exit="out"
            variants={transitionAnimation.bodyTransition}
            transition={transitionAnimation.transitionDuration}
          >
            <div className="flex flex-col">
              <UserInformation name={name} />
              <div className="bg-gdscGrey-100 md:min-h-screen flex-1 md:pl-[60px] pl-5 3xl:pl-[60px] md:pt-10 md:pb-[132px] text-2xl font-bold flex overflow-x-scroll">
                <div
                  className="w-[392px] h-full hidden xl:block"
                  id="MyUrlPage"
                >
                  <MyUrl id={id} />
                </div>
                <motion.div
                  className="w-full h-full md:ml-4"
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={transitionAnimation.bodyTransition}
                  transition={transitionAnimation.transitionDuration}
                >
                  <Detail id={id} />
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
