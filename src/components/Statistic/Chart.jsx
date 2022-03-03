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
import {} from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { MONTH, DATE } from 'constant/dateName';
import {
  LAST_DAY, LAST_MONTH, LAST_WEEK, LAST_YEAR,
} from 'constant/options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function Chart({ data, option, onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const today = new Date();
  const daysInThisMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();

  const setLabel = () => {
    switch (option) {
      case LAST_YEAR:
        return MONTH;
      case LAST_DAY:
        return Array.from(Array(24).keys()).map((el) => `${el}:00`);
      case LAST_WEEK:
        return DATE;
      case LAST_MONTH:
        return Array.from({ length: daysInThisMonth }, (_, i) => i + 1);
      default:
        return MONTH;
    }
  };

  const handleClick = () => setIsOpen(!isOpen);

  const datasets = {
    labels: setLabel(),
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
        tension: 0,
      },
    },
    scales: {
      y: {
        ticks: {
          precision: 0,
          beginAtZero: true,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  useEffect(() => {
    const closeSelect = () => setIsOpen(false);
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', closeSelect);
      }
    }, 0);
    return () => window.removeEventListener('click', closeSelect);
  }, [isOpen]);

  return (
    <div className="w-full xl:w-[868px] 3xl:w-[880px] px-5 py-5 lg:px-8 flex flex-col space-y-3 md:space-y-7  bg-white rounded">
      <div className="flex justify-between">
        <h1 className="font-medium text-xs md:text-base">Times Clicked On</h1>
        <div
          aria-hidden
          className="w-[128px] h-11 text-base text-gdscGrey-700 p-2 lg:p-3 outline-none bg-[#F0F5F7] mt-3 mx-0 self-end text-left cursor-pointer rounded block md:mt-1 md:mr-3 focus:outline-none"
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
            {[LAST_DAY, LAST_MONTH, LAST_WEEK, LAST_YEAR]
              .filter((el) => el !== option)
              .map((el) => (
                <button
                  aria-hidden
                  type="button"
                  key={el}
                  className="block"
                  onClick={() => {
                    onFilter(el);
                    setIsOpen(false);
                  }}
                >
                  {el}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[164px] md:h-[372px]">
        <Line data={datasets} options={options} />
      </div>
    </div>
  );
}

Chart.propTypes = {
  data: PropTypes.instanceOf(Array),
  onFilter: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};

Chart.defaultProps = {
  data: [],
};
