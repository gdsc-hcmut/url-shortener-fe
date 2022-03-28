import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { ReactComponent as GlobeIcon } from 'assets/icons/globe_icon.svg';
import { ReactComponent as GraphIcon } from 'assets/icons/graph_icon.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/logo/facebook_logo.svg';
import { ReactComponent as InstagramLogo } from 'assets/icons/logo/instagram_logo.svg';
import { ReactComponent as LinkedinLogo } from 'assets/icons/logo/linkedin_logo.svg';
import { ReactComponent as MessengerLogo } from 'assets/icons/logo/messenger_logo.svg';
import { ReactComponent as TwitterLogo } from 'assets/icons/logo/twitter_logo.svg';
import { ReactComponent as YoutubeLogo } from 'assets/icons/logo/youtube_logo.svg';

function SwitchCase(logo) {
  const { props } = logo;
  switch (props) {
    case 'Facebook':
      return <FacebookLogo />;
    case 'Messenger':
      return <MessengerLogo />;
    case 'Instagram':
      return <InstagramLogo />;
    case 'Twitter':
      return <TwitterLogo />;
    case 'Linkedin':
      return <LinkedinLogo />;
    case 'Youtube':
      return <YoutubeLogo />;
    case 'Total':
      return (
        <div className="w-[52px] h-[52px] flex justify-center items-center  bg-gdscGreen-100 bg-opacity-50 rounded-full">
          <GraphIcon />
        </div>
      );
    default:
      return (
        <div className="w-[52px] h-[52px] flex justify-center items-center bg-gdscGrey-200 rounded-full">
          <GlobeIcon />
        </div>
      );
  }
}
export default function SocialMedia({ data }) {
  const socialMediaArray = [
    'Facebook',
    'Messenger',
    'Instagram',
    'Twitter',
    'Linkedin',
    'Youtube',
    'Others',
    'Total',
  ];
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    // eslint-disable-next-line max-len
    const filterArray = socialMediaArray.filter((el) => el.toLowerCase().includes(search.toLowerCase()));
    setSearchList(filterArray);
  }, [search]);
  return (
    <div
      className="md:h-[480px] md:w-[504px] lg:w-[312px] 3xl:w-[504px] w-full
    px-5 pt-8 pb-12 mb-6 md:mb-4 3xl:mb-6 mx-0 lg:mr-4 3xl:mr-6
    bg-white rounded overflow-auto no-scrollbar"
    >
      <h1 className="w-full h-10 mb-1 text-xl text-center">Social Media</h1>
      <input
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        className="w-full h-10 mb-2 bg-[#F0F5F7] focus:bg-white\
        border-[1px] border-[#F0F5F7] focus:border-gdscBlue-300 px-5 outline-none rounded text-base font-light"
      />
      <div className="flex flex-col">
        {(search ? searchList : socialMediaArray).map((el) => (el === 'Total' ? (
          <div className="flex items-center h-[52px] mt-8" key={el}>
            <SwitchCase props={el} />
            <span className="font-normal text-xl ml-3">Total</span>
            <span className="font-thin text-base text-gdscGrey-700 ml-auto">
              {Object.values(data).reduce((sum, element) => sum + element)}
            </span>
          </div>
        ) : (
          <div className="flex items-center h-[52px] mt-8" key={el}>
            <SwitchCase props={el} />
            <span className="font-normal text-xl ml-3">{el}</span>
            <span className="font-thin text-base text-gdscGrey-700 ml-auto">
              {!(el === 'Others')
                ? data[el]
                : Object.values(
                  _.omit(data, [
                    'Facebook',
                    'Messenger',
                    'Instagram',
                    'Twitter',
                    'Linkedin',
                    'Youtube',
                  ]),
                ).reduce((sum, element) => sum + element)}
            </span>
          </div>
        )))}
      </div>
    </div>
  );
}

SocialMedia.propTypes = {
  data: PropTypes.shape({
    Facebook: PropTypes.number.isRequired,
    Messenger: PropTypes.number.isRequired,
    Instagram: PropTypes.number.isRequired,
    Twitter: PropTypes.number.isRequired,
    Linkedin: PropTypes.number.isRequired,
    Youtube: PropTypes.number.isRequired,
  }).isRequired,
};
