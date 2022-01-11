import React from 'react';

import InputUrl from './InputUrlBox/InputUrlBox';
import HomepageText from './title/HomepageText';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col space-y-[39px]">
      <HomepageText />
      <InputUrl />
    </div>
  );
}
