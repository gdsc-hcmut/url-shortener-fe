import React, { useState, useEffect } from 'react';

import SignUpModalMobile from 'components/SignUpModal/SignUpModalMobile';

export default function SignUp() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  if (isMobile) {
    return (
      <div>
        <SignUpModalMobile />
      </div>
    );
  }
  return <div> </div>;
}
