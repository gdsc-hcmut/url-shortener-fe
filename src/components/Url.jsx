import React from 'react';
import { useSelector } from 'react-redux';

export default function Url() {
  const { shortenedUrl } = useSelector((state) => state.url);

  return (
    <a
      href={shortenedUrl}
      target="_blank"
      rel="noreferrer"
      className="text-gdscGrey-800 py-[12px] text-xs whitespace-nowrap md:text-base ml-[20px] md:ml-[8px] mr-[20px] w-[240px] overflow-auto no-scrollbar"
    >
      {shortenedUrl}
    </a>
  );
}
