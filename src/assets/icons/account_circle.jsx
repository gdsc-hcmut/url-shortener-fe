import PropTypes from 'prop-types';
import React from 'react';

export default function AccountCircle({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.70569C6.48 2.70569 2 7.33308 2 13.0347C2 18.7363 6.48 23.3637 12 23.3637C17.52 23.3637 22 18.7363 22 13.0347C22 7.33308 17.52 2.70569 12 2.70569ZM12 5.80439C13.66 5.80439 15 7.18847 15 8.90309C15 10.6177 13.66 12.0018 12 12.0018C10.34 12.0018 9 10.6177 9 8.90309C9 7.18847 10.34 5.80439 12 5.80439ZM12 20.4716C9.5 20.4716 7.29 19.1494 6 17.1456C6.03 15.0902 10 13.9643 12 13.9643C13.99 13.9643 17.97 15.0902 18 17.1456C16.71 19.1494 14.5 20.4716 12 20.4716Z"
        fill={color}
      />
    </svg>
  );
}

AccountCircle.propTypes = {
  color: PropTypes.string,
};

AccountCircle.defaultProps = {
  color: '#696969',
};