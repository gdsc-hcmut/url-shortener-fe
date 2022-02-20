import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

export default function MainTitle({ loggedIn }) {
  const { user } = useSelector((state) => state.auth);
  const getName = user.name.split(' ');
  const userName = getName[getName.length - 1];
  if (loggedIn) {
    return (
      <p className="text-[32px] font-bold md:text-[52px]">
        Welcome back,
        <br />
        {user && userName}
      </p>
    );
  }
  return (
    <p className="text-[32px] font-bold md:text-[52px]">
      Shorten your link with
      <br />
      GDSC - HCMUT
    </p>
  );
}
MainTitle.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
