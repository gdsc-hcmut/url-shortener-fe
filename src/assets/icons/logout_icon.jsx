import PropTypes from 'prop-types';
import React from 'react';

export default function LogoutIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8182 0H2.18182C0.981818 0 0 1.00111 0 2.22469V6.66296H2.18182V2.20245H21.8182V17.8087H2.18182V13.337H0V17.7976C0 19.0211 0.981818 20 2.18182 20H21.8182C23.0182 20 24 19.0211 24 17.7976V2.22469C24 0.989989 23.0182 0 21.8182 0ZM10.9091 14.4494L15.2727 10L10.9091 5.55061V8.88765H0V11.1123H10.9091V14.4494Z"
        fill={color}
      />
    </svg>
  );
}

LogoutIcon.propTypes = {
  color: PropTypes.string,
};
LogoutIcon.defaultProps = {
  color: '#696969',
};