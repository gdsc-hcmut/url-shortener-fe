import React from 'react';

import Url from 'components/Url';
import UrlInputBoxAndTitle from 'components/completeInputUrlBox/urlInputBox&Title';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-blue-600 underline">My URL</h1>
      <UrlInputBoxAndTitle />
      <Url />
    </div>
  );
}
