import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHOW_URL_MODAL } from 'action-types';
import transitionAnimation from 'animations';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import Footer from 'components/Footer';
import ModalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import SideMenu from 'components/SideMenu';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function HomepageLogin() {
  const { shortenedUrl, slug } = useSelector((state) => state.urlWithSlug);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { UrlModal } = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div
      aria-hidden="true"
      className="flex flex-col relative justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain"
    >
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={transitionAnimation.navbarTransition}
        transition={transitionAnimation.transitionDuration}
        className="w-full z-50"
      >
        <button
          type="button"
          className="absolute md:hidden right-5 top-3 z-50"
          onClick={handleToggleMenu}
        >
          <MenuIcon className="w-10 h-10" />
        </button>
        <NavBar home />
      </motion.div>
      <div className="flex h-full mt-[-130px]">
        <div className="md:hidden mt-[104px]">
          <SideMenu toggle={toggleMenu} page="home" />
        </div>
        <motion.div
          className="ml-[1.25rem] mt-[216px] mb-[288px] md:mt-[260px] md:mb-[276px] w-full"
          initial="out"
          animate="in"
          exit="out"
          variants={transitionAnimation.urlInputBoxTransition}
          transition={transitionAnimation.transitionDuration}
        >
          <UrlInputBoxAndTitle loggedIn />
        </motion.div>
      </div>
      <ModalUrl
        title="My Modal"
        onClose={() => dispatch({
          type: SHOW_URL_MODAL,
          payload: false,
        })}
        show={UrlModal}
        shortenedUrl={shortenedUrl}
        slug={slug}
      />
      <Footer />
    </div>
  );
}
