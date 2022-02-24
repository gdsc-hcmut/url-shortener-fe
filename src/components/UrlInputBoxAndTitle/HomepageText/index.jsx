import PropTypes from 'prop-types';
import React from 'react';

import MainTitle from './MainTitle';
import SubTitle from './SubTitle';

export default function HomepageText({ loggedIn }) {
  if (loggedIn) {
    return (
      <div>
        <MainTitle loggedIn />
        <SubTitle loggedIn />
      </div>
    );
  }
  return (
    <div>
      <MainTitle loggedIn={false} />
      <SubTitle loggedIn={false} />
    </div>
  );
}
HomepageText.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
