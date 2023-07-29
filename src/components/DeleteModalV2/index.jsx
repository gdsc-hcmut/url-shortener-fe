import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_modal.svg';

import Button from './Button';

export default function DeleteModal({
  title,
  onDelete,
  deletingUrl,
  show,
  setShow,
}) {
  const titleName = title === 'Domain Blacklist' ? 'domain' : 'url';
  return (
    <div className="modal absolute z-50">
      <div
        aria-hidden="true"
        className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
          show ? 'opacity-100 pointer-events-auto' : ''
        }`}
      >
        <div
          aria-hidden="true"
          className="w-[320px] sm:w-[376px] h-[376px] md:w-[412px] px-[20px] sm:px-[58px] py-8 flex flex-col items-center border bg-white rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteIcon />
          <span className="text-2xl font-normal text-gdscRed-300 mt-7">
            ARE YOU SURE?
          </span>
          <span className="text-base text-gdscGrey-800 text-center mt-7 md:mt-9">
            {`The ${titleName} will be removed from blacklist`}
          </span>
          <div className="w-[260px] mt-3 flex justify-between">
            <Button text="Cancel" onClick={() => setShow(false)} />
            <Button
              text="Delete"
              onClick={() => {
                onDelete(deletingUrl);
                setShow(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  deletingUrl: PropTypes.shape({
    link: PropTypes.string.isRequired,
    addedAt: PropTypes.string.isRequired,
    addedBy: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
