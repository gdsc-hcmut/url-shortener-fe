import React from 'react';

import HomepageText from './HomepageText';
import InputUrlField from './InputUrlField';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col space-y-[12px] md:space-y-[39px]">
      <HomepageText />
      <InputUrlField />
    </div>
  );
}
