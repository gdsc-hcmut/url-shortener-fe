import React from 'react';

import InputUrlField from './InputUrlBox/InputUrlField';
import HomepageText from './title/HomepageText';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col space-y-[12px] md:space-y-[39px]">
      <HomepageText />
      <InputUrlField />
    </div>
  );
}
