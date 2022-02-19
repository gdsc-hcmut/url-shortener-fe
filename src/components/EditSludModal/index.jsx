import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import urlAction from 'actions/url';
import CloseIcon from 'assets/icons/close.svg';
import EditIcon from 'assets/icons/edit.svg';

export default function EditSlugModal({ show, onClose, slug }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const { slugExist, urlList } = useSelector((state) => state.url);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  const handleCloseBtn = () => onClose();
  const handleChange = (e) => setValue(e.target.value);

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  useEffect(() => {
    if (show && slug) setValue(slug);
  }, [show]);

  return (
    <div
      aria-hidden="true"
      className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : ''
      }`}
      onKeyDown={closeOnEscapeKeyDown}
      onClick={onClose}
    >
      <div
        aria-hidden="true"
        className="relative w-[376px] h-[304px] flex items-center border bg-white rounded px-5 py-[32px]"
      >
        <button
          aria-hidden="true"
          type="button"
          className="absolute w-[40px] h-[40px] bg-[#F0F5F7] hover:bg-[#DCF3FC]
                    flex flex-col justify-center items-center transition-all duration-300 ease-out
                    right-[12px] top-[12px] rounded"
          onClick={handleCloseBtn}
        >
          <img className="w-[12px] h-[12px]" src={CloseIcon} alt="X" />
        </button>
        <div
          aria-hidden="true"
          className="w-full h-full flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl font-medium mb-8">Edit your slug</h1>
          <div className="relative mb-5">
            <div className="absolute left-5 top-5 bottom-5 ">
              <img
                className="w-[24px] h-[24px]"
                src={EditIcon}
                alt="EditIcon"
              />
            </div>
            <input
              className="w-full h-[64px] bg-white border-[1px] border-gdscGrey-200 focus:border-gdscBlue-300 rounded shadow-[0_6px_15px_rgba(64,79,104,0.05)] outline-none pl-16 pr-5 pt-6 pb-5"
              value={value}
              onChange={handleChange}
            />
          </div>
          <span className="h-5 text-base font-normal text-gdscRed-300 mb-4">
            {slugExist ? 'Slug has been taken' : ''}
          </span>
          <button
            aria-hidden="true"
            type="button"
            className="w-[136px] h-[52px] text-white text-center bg-gdscBlue-300 hover:bg-shorten-btn-hover rounded"
            onClick={async () => dispatch(urlAction.editSlug(slug, value, urlList))}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

EditSlugModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
};

EditSlugModal.defaultProps = {
  show: false,
};
