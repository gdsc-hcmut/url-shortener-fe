import PropTypes from 'prop-types';
import React from 'react';

import HomepageText from './HomepageText';
import InputUrlField from './InputUrlField';
import InputUrlLogIn from './InputUrlField/inputUrlLogIn';

export default function UrlInputBoxAndTitle({ loggedIn }) {
  if (loggedIn) {
    return (
      <div className="flex flex-col space-y-[12px] md:space-y-[39px]">
        <HomepageText loggedIn />
        <InputUrlLogIn />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:space-y-[40px]">
      <HomepageText />
      <InputUrlField />
    </div>
  );
}
UrlInputBoxAndTitle.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
