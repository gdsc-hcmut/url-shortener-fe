import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import ArrowDownIcon from 'assets/icons/arrow_down.svg';

export default function ListBox({ listOption, handleOnClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    listOption[0] ? listOption[0] : '',
  );

  useEffect(() => {
    const closeSelect = () => setIsOpen(false);
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', closeSelect);
      }
    }, 0);
    return () => window.removeEventListener('click', closeSelect);
  }, [isOpen]);

  return (
    <button
      type="button"
      className="h-[100%] w-[100%] relative flex flex-row items-center justify-between my-0 px-[20px] bg-transparent"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className="truncate">{selectedOption}</span>
      <img src={ArrowDownIcon} alt="arrow down icon" />
      <div
        className={`w-auto absolute bg-white flex flex-col text-center z-20 left-0 top-[120%] rounded-[8px] ${
          isOpen ? '' : 'hidden'
        }`}
      >
        {listOption
          .filter((option) => option !== selectedOption)
          .map((option) => (
            <button
              key={option}
              type="button"
              className="w-auto flex items-center text-left px-[20px] py-[12px] hover:bg-gdscBlue-50 hover:text-gdscBlue-300 whitespace-nowrap"
              onClick={() => {
                handleOnClick(option);
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
      </div>
    </button>
  );
}

ListBox.propTypes = {
  listOption: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOnClick: PropTypes.func,
};

ListBox.defaultProps = {
  handleOnClick: () => {},
};
