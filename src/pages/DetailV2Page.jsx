import { motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import transitionAnimation from 'animations';
import { ReactComponent as BackIcon } from 'assets/icons/BackIcon.svg';
import DetailV2 from 'components/DetailV2';
import MyUrlV2 from 'components/MyUrlV2';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';
import UrlAPI from 'services/url.service';

export default function DetailV2Page() {
  const { state } = useLocation();
  const { id } = state;

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
            <MyUrlV2
              id={id}
              pageName="User URLs"
              fetchUrlList={UrlAPI.getUrlList}
              searchUrl={UrlAPI.searchUrl}
            />
          </div>
          <motion.div
            className="w-full h-full md:ml-4"
            initial="out"
            animate="in"
            exit="out"
            variants={transitionAnimation.bodyTransition}
            transition={transitionAnimation.transitionDuration}
          >
            <DetailV2 id={id} fetchDataUrl={UrlAPI.getUrlById} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
