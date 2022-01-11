import React from 'react';
import HomepageText from './title/homepageText';
import InputUrl from './InputUrlBox/index.jsx';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col space-y-[39px]">
      <HomepageText />
      <InputUrl />
    </div>
  );
}
