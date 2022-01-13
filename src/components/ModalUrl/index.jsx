/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function ModalUrl({ show, onClose }) {
  if (!show) {
    return null;
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[410px] h-[375px] flex flex-col items-center border bg-white rounded"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[153px] h-[148px] mt-[30px] ml-[128px] mr-[129px] bg-[#000000]"></div>
        <button
          type="button"
          className="bg-gdscBlue-300 rounded py-[12px] px-[40px] mt-[35px] text-white"
        >
          Download PNG
        </button>
        <div className="flex justify-end items-center w-[349px] h-[53px] mt-[36px] border-[1px] border-gdscBlue-300 rounded">
          <p className="text-gdscGrey-800 mx-[9px] ">
            https://url.gdschcmut.dev/eXPhH
          </p>
          <div class="border-l-[1px] h-[53px] border-gdscBlue-300"></div>
          <button
            type="button"
            className="mx-[9px] w-[90px] h-[43px] text-white bg-gdscBlue-300 rounded"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

ModalUrl.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

// ModalUrl.defaultProps = {
//   show: false,
//   children: null,
// };
