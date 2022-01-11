import React from 'react';

import InputUrl from './InputUrlBox/inputUrlBox';
import HomepageText from './title/homepageText';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col space-y-[39px]">
      <HomepageText />
      <InputUrl />
    </div>
  );
}
