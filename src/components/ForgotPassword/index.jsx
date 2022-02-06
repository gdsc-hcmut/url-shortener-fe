import PropTypes from 'prop-types';
import React from 'react';

import ForgotPasswordDesktop from './ForgotPasswordDesktop';
import ForgotPasswordMobile from './ForgotPasswordMobile';

export default function ForgotPassword({ show, onClose }) {
  return (
    <div>
      <ForgotPasswordDesktop show={show} onClose={onClose} />
      <ForgotPasswordMobile />
    </div>
  );
}
ForgotPassword.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
