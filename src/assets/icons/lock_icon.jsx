import PropTypes from 'prop-types';
import React from 'react';

export default function LockIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16.2926C9.1 16.2926 10 15.3926 10 14.2926C10 13.1926 9.1 12.2926 8 12.2926C6.9 12.2926 6 13.1926 6 14.2926C6 15.3926 6.9 16.2926 8 16.2926ZM14 7.2926H13V5.2926C13 2.5326 10.76 0.292603 8 0.292603C5.24 0.292603 3 2.5326 3 5.2926V7.2926H2C0.9 7.2926 0 8.1926 0 9.2926V19.2926C0 20.3926 0.9 21.2926 2 21.2926H14C15.1 21.2926 16 20.3926 16 19.2926V9.2926C16 8.1926 15.1 7.2926 14 7.2926ZM4.9 5.2926C4.9 3.5826 6.29 2.1926 8 2.1926C9.71 2.1926 11.1 3.5826 11.1 5.2926V7.2926H4.9V5.2926ZM14 19.2926H2V9.2926H14V19.2926Z"
        fill={color}
      />
    </svg>
  );
}

LockIcon.propTypes = {
  color: PropTypes.string,
};
LockIcon.defaultProps = {
  color: '#696969',
};
