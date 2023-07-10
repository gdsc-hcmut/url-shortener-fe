import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function ListBox({
  options,
  onClick,
  selectedOption,
  isOpen,
  setIsOpen,
}) {
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
    <div
      className={`w-auto absolute bg-white flex flex-col text-center z-20 left-0 top-[120%] rounded-[8px] ${
        isOpen ? '' : 'hidden'
      }`}
    >
      {options
        .filter((option) => option !== selectedOption)
        .map((option) => (
          <button
            key={option}
            type="button"
            className="w-auto flex items-center text-left px-[20px] py-[12px] hover:bg-gdscBlue-50 hover:text-gdscBlue-300 whitespace-nowrap"
            onClick={() => {
              onClick(option);
              setIsOpen(false);
            }}
          >
            {option}
          </button>
        ))}
    </div>
  );
}

ListBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func,
};

ListBox.defaultProps = {
  selectedOption: '',
  setIsOpen: () => {},
};
