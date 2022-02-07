import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { MONTH } from 'constant/dateName';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function Chart({ data }) {
  const [option, setOption] = useState('Last Year');
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = ['Last Year', 'Last Day', 'Last Week', 'Last Month'];

  const handleClick = () => setIsOpen(!isOpen);

  const datasets = {
    labels: MONTH,
    datasets: [
      {
        data,
        label: '',
        borderColor: '#4285F4',
        fill: false,
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: '',
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="md:h-[496px] h-[240px] 3xl:w-[1032px] md:w-[504px] w-full px-5 py-5 lg:px-8 flex flex-col space-y-3 md:space-y-7  bg-white rounded">
      <div className="flex justify-between">
        <h1 className="font-medium text-xs md:text-base">Times Clicked On</h1>
        <button
          type="button"
          className="w-[128px] h-11 text-base text-gdscGrey-700 p-2 lg:p-3 outline-none bg-[#F0F5F7] mt-3 mx-0 self-end text-left cursor-pointer rounded block md:mt-1 md:mr-3 focus:outline-none focus:ring-1 focus:ring-gdscBlue-300"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={handleClick}
        >
          <span className="flex items-center justify-between">
            <span className="truncate">{option}</span>
            <span className="">
              <ArrowDown />
            </span>
          </span>
          <div
            className={`relative top-4 right-3 space-y-2 w-[124px] h-[120px] bg-[#F0F5F7] rounded font-light shadow-md text-base px-5 py-3 z-50 ${
              isOpen ? '' : 'hidden'
            }`}
          >
            {sortOptions
              .filter((el) => el !== option)
              .map((el) => (
                <div
                  aria-hidden="true"
                  key={el}
                  className="block"
                  onClick={() => {
                    setOption(el);
                    setIsOpen(false);
                  }}
                >
                  {el}
                </div>
              ))}
          </div>
        </button>
      </div>
      <div className="relative w-full h-[164px] md:h-[372px]">
        <Line data={datasets} options={options} />
      </div>
    </div>
  );
}

Chart.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};
