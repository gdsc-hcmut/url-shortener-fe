import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import React from 'react';

import googleLoading from 'assets/animation/google-loading.json';

export default function GoogleLoadingAnimation({ show, background }) {
  return (
    <div
      className={`fixed z-50 inset-0 ${
        background ? 'bg-gdscGrey-100 bg-opacity-50' : 'bg-white'
      } flex justify-center items-center ${show ? 'block' : 'hidden'}`}
    >
      <Lottie className="ml-[64px]" animationData={googleLoading} loop />
    </div>
  );
}
GoogleLoadingAnimation.propTypes = {
  show: PropTypes.bool.isRequired,
  background: PropTypes.bool.isRequired,
};
