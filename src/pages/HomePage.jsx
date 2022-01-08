/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import urlService from 'services/urls';
import Url from 'components/Url';
import 'index.css';

export default function HomePage() {
  const [url, setUrl] = useState([]);
  useEffect(() => {
    urlService.getAll().then((initialUrls) => {
      setUrl(initialUrls);
    });
  }, []);
  return (
    <>
      <h1 className="text-3xl text-blue-600 underline">My URL</h1>
      {url.map((myUrl) => (
        <Url Shortlink={myUrl.Shortlink} Longlink={myUrl.Longlink} />
      ))}
    </>
  );
}
