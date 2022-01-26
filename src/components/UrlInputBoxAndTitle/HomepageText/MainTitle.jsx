import PropTypes from 'prop-types';
import React from 'react';

export default function MainTitle({ loggedIn }) {
  if (loggedIn) {
    return (
      <p className="text-[32px] font-bold md:text-[52px]">
        Welcome back,
        <br />
        John!
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
