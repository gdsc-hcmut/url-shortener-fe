import PropTypes from 'prop-types';
import React from 'react';

import HomepageText from './HomepageText';
import InputUrlField from './InputUrlField';

export default function UrlInputBoxAndTitle({ onClick }) {
  return (
    <div className="flex flex-col md:space-y-[40px]">
      <HomepageText />
      <InputUrlField onClick={onClick} />
    </div>
  );
}
UrlInputBoxAndTitle.propTypes = {
  onClick: PropTypes.func.isRequired,
};
