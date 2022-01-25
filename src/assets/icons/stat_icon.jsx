import PropTypes from 'prop-types';
import React from 'react';

export default function StatIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 24H15V0H9V24ZM0 24H6V12H0V24ZM18 7.5V24H24V7.5H18Z"
        fill={color}
      />
    </svg>
  );
}

StatIcon.propTypes = {
  color: PropTypes.string,
};
StatIcon.defaultProps = {
  color: '#696969',
};
