import PropTypes from 'prop-types';
import React from 'react';

import ForgotPasswordDesktop from './ForgotPasswordDesktop';

export default function ForgotPassword({ show, onClose }) {
  return (
    <div className="hidden md:block">
      <ForgotPasswordDesktop show={show} onClose={onClose} />
    </div>
  );
}
ForgotPassword.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
