import PropTypes from 'prop-types';
import React from 'react';

export default function Url({ shortenedUrl }) {
  if (shortenedUrl == null) {
    return (
      <a
        href={shortenedUrl}
        target="_blank"
        rel="noreferrer"
        className="text-gdscGrey-800 py-[12px] text-base whitespace-nowrap md:text-base ml-[20px] md:ml-[8px] mr-[20px] w-[240px] overflow-auto no-scrollbar"
      >
        Shortening...
      </a>
    );
  }
  return (
    <a
      href={shortenedUrl}
      target="_blank"
      rel="noreferrer"
      className="text-gdscGrey-800 py-[12px] text-base whitespace-nowrap md:text-base ml-[20px] md:ml-[8px] mr-[20px] w-[240px] overflow-auto no-scrollbar"
    >
      {shortenedUrl}
    </a>
  );
}
Url.propTypes = {
  shortenedUrl: PropTypes.string.isRequired,
};
