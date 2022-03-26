import React, { useEffect, useState } from 'react';

import { LAST_YEAR } from 'constant/options';
import UrlAPI from 'services/url.service';

import Chart from './Chart';
import SocialMedia from './SocialMedia';
import TodayClick from './TodayClick';
import TotalClick from './TotalClick';

export default function Statistic() {
  const [option, setOption] = useState(LAST_YEAR);
  const [statistic, setStatistic] = useState([]);

  const handleFilter = (filter) => setOption(filter);

  useEffect(() => {
    const getStatistic = async () => {
      const { data } = await UrlAPI.getStatistic(option);
      setStatistic(data);
    };
    getStatistic();
  }, [option]);
  return (
    <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:pt-10 md:pl-[60px] py-5 px-5">
      <h1 className="text-[32px] font-medium mb-[72px]">Statistic</h1>
      <div className="2xl:w-fit w-full h-fit flex flex-col 2xl:flex-row gap-6 mb-6 md:gap-4 md:mb-4 3xl:gap-6 3xl:mb-6">
        <div className="w-full flex flex-col gap-6 md:gap-4 3xl:gap-6">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-4 3xl:gap-6">
            <TodayClick todayClick={statistic.todayClicks} />
            <TotalClick totalClick={statistic.totalClicks} />
          </div>
          <Chart
            data={statistic.clickList}
            option={option}
            onFilter={handleFilter}
          />
        </div>
        <div>
          <SocialMedia
            data={statistic.socialMediaClicks}
            total={statistic.totalClicks}
          />
        </div>
      </div>
    </div>
  );
}
