import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import { ReactComponent as BackIcon } from 'assets/icons/BackIcon.svg';
import Detail from 'components/Detail';
import MyUrl from 'components/MyUrl';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function Homepage() {
  const { id } = useParams();

  return (
    <div className="max-h-[100vh] detail-page flex flex-col">
      <NavLink to="/my-url" className="absolute md:hidden right-5 top-3 z-50">
        <div className="w-10 h-10 flex justify-center items-center">
          <BackIcon />
        </div>
      </NavLink>
      <Navbar home={false} />
      <div className="flex overflow-hidden h-full">
        <SideMenu toggle={false} page="detail" />
        <div className="bg-gdscGrey-100 md:min-h-screen flex-1 detail-md:pl-[60px] md:pt-10 md:pb-[156px] pl-5 text-2xl font-bold flex overflow-x-scroll">
          <div className="w-[392px] h-full hidden xl:block" id="MyUrlPage">
            <MyUrl id={id} detail />
          </div>
          <div className="w-full h-full md:ml-4">
            <Detail id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
