import PropTypes from 'prop-types';
import React from 'react';

export default function LinkIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.88 10.6L3.36 6L8.88 1.4L7.2 0L0 6L7.2 12L8.88 10.6ZM15.12 10.6L20.64 6L15.12 1.4L16.8 0L24 6L16.8 12L15.12 10.6Z"
        fill={color}
      />
    </svg>
  );
}

LinkIcon.propTypes = {
  color: PropTypes.string,
};
LinkIcon.defaultProps = {
  color: '#696969',
};
