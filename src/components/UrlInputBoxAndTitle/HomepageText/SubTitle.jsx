import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SHOW_SIGN_UP_MODAL } from 'action-types';

export default function SubTitle({ loggedIn }) {
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
  const dispatch = useDispatch();
  const isMobile = width <= 768;
  if (loggedIn) {
    return (
      <div className="md:mb-0 md:mt-2 flex flex-col md:items-center flex-end md:h-6 space-y-1.5 md:flex-row md:space-x-3.5 md:space-y-0">
        <p className="text-base font-normal text-gdscGrey-700">
          Let&apos;s shorten your URL!
        </p>
      </div>
    );
  }
  if (isMobile) {
    return (
      <div className="md:mb-0 md:mt-3.5 flex flex-col md:items-center flex-end md:h-6 space-y-1.5 md:flex-row md:space-x-3.5 md:space-y-0">
        <p className="text-lg font-normal text-gdscGrey-700">
          Want to have a customized slug and use more features?
        </p>
        <Link to="/sign-up">
          <button
            type="button"
            className="md:m-0 w-[92px] h-6 b-[50px] bg-get-started-btn-hover rounded-[60px] flex justify-center items-center hover:bg-gdscBlue-100  ease-out duration-300"
          >
            <div className="opacity-100 text-xs font-normal text-gdscBlue-300 flex justify-center items-center">
              Get started
            </div>
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="md:mb-0 md:mt-2 flex flex-col md:items-center flex-end md:h-6 space-y-1.5 md:flex-row md:space-x-4 md:space-y-0">
      <p className="text-lg font-normal text-gdscGrey-700">
        Want to have a customized slug and use more features?
      </p>
      <button
        type="submit"
        onClick={() => {
          dispatch({
            type: SHOW_SIGN_UP_MODAL,
            payload: true,
          });
        }}
        className="md:m-0 w-[92px] h-6 b-[50px] bg-get-started-btn rounded-[60px] flex justify-center items-center hover:bg-get-started-btn-hover  ease-out duration-300"
      >
        <div className="opacity-100 text-xs font-normal text-gdscBlue-300 flex justify-center items-center">
          Get started
        </div>
      </button>
    </div>
  );
}
SubTitle.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
