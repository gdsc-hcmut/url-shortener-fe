import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

export default function MainTitle({ loggedIn }) {
  const { user } = useSelector((state) => state.auth);
  let getName;
  let userName;
  if (user) {
    getName = user.name.split(' ');
    userName = getName[getName.length - 1];
  } else {
    userName = 'User';
  }
  if (loggedIn) {
    return (
      <p className="text-[32px] font-bold md:text-[52px]">
        Welcome back,
        <br />
        {userName}
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
