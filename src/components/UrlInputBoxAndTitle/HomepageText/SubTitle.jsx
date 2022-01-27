import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SHOW_MODAL } from 'action-types';

export default function SubTitle() {
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
  if (isMobile) {
    return (
      <div className="md:mb-0 md:mt-3.5 flex flex-col md:items-center flex-end md:h-6 space-y-1.5 md:flex-row md:space-x-3.5 md:space-y-0">
        <p className="text-base font-normal text-gdscGrey-700">
          Want more details on your previous shortened link?
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'http://localhost:3000/sign-up';
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
  return (
    <div className="md:mb-0 md:mt-2 flex flex-col md:items-center flex-end md:h-6 space-y-1.5 md:flex-row md:space-x-4 md:space-y-0">
      <p className="text-base font-normal text-gdscGrey-700">
        Want more details on your previous shortened link?
      </p>
      <button
        type="submit"
        onClick={() => dispatch({
          type: SHOW_MODAL,
          payload: true,
        })}
        className="md:m-0 w-[92px] h-6 b-[50px] bg-get-started-btn rounded-[60px] flex justify-center items-center hover:bg-get-started-btn-hover  ease-out duration-300"
      >
        <div className="opacity-100 text-xs font-normal text-gdscBlue-300 flex justify-center items-center">
          Get started
        </div>
      </button>
    </div>
  );
}
