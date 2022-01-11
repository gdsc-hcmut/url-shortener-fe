import React from 'react';

import InputUrlField from './InputUrlBox/inputUrlField';
import HomepageText from './title/homepageText';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col space-y-[12px] md:space-y-[39px]">
      <HomepageText />
      <InputUrlField />
    </div>
  );
}
