import React from 'react';

import HomepageText from './HomepageText';
import InputUrlField from './InputUrlField';

export default function UrlInputBoxAndTitle() {
  return (
    <div className="flex flex-col md:space-y-[40px]">
      <HomepageText />
      <InputUrlField />
    </div>
  );
}
