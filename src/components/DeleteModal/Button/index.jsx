import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className={`w-[92px] h-11 text-center border rounded-[4px] text-base ${
        text === 'Delete'
          ? 'bg-gdscRed-300 text-white'
          : 'bg-white text-gdscGrey-800 border-gdscGrey-200'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
