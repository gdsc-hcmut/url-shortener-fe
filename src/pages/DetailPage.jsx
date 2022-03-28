import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import { logout } from 'actions/auth';
import transitionAnimation from 'animations';
import { ReactComponent as BackIcon } from 'assets/icons/BackIcon.svg';
import Detail from 'components/Detail';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function Homepage() {
  const { state } = useLocation();
  const { id } = state;
  const { user } = useSelector((states) => states.auth);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (!user) {
      await dispatch(logout());
    }
  }, []);
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="max-h-[100vh] detail-page flex flex-col bg-gdscGrey-100">
      <NavLink to="/urls" className="absolute md:hidden right-5 top-3 z-50">
        <div className="w-10 h-10 flex justify-center items-center">
          <BackIcon />
        </div>
      </NavLink>
      <Navbar home={false} />
      <div className="flex overflow-hidden h-full">
        <SideMenu toggle={false} page="detail" />
        <div className="bg-gdscGrey-100 md:min-h-screen flex-1 md:pl-[60px] pl-5 3xl:pl-[60px] md:pt-10 md:pb-[132px] text-2xl font-bold flex overflow-x-scroll">
          <div className="w-[392px] h-full hidden xl:block" id="MyUrlPage">
            <MyUrl id={id} detail />
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
    </div>
  );
}
