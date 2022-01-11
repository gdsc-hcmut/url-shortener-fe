import React from 'react';
import { useSelector } from 'react-redux';

export default function Url() {
  const { shortenedUrl } = useSelector((state) => state.url);

  return (
    <a href={shortenedUrl} target="_blank" rel="noreferrer">
      {shortenedUrl}
    </a>
  );
}
