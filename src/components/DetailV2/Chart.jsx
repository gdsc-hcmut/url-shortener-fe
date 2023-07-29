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
  const today = new Date();
  const daysInThisMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();

  const setLabel = () => {
    switch (option) {
      case 'Last Year':
        return MONTH;
      case 'Last Day':
        return Array.from(Array(24).keys()).map((el) => `${el}:00`);
      case 'Last Week':
        return DATE;
      case 'Last Month':
        return Array.from({ length: daysInThisMonth }, (_, i) => i + 1);
      default:
        return MONTH;
    }
  };

  const transform = (transformData, max) => {
    const result = [];
    for (let i = 0; i < max; i += 1) {
      result[i] = transformData.reduce((prev, curr) => {
        if (curr === i) {
          return prev + 1;
        }
        return prev;
      }, 0);
    }
    return result;
  };

  const proccessData = () => {
    switch (option) {
      case 'Last Year':
        return transform(
          data.map((click) => {
            const clickDate = new Date(click.dateClicked);
            if (clickDate.getYear() === today.getYear()) {
              return clickDate.getMonth();
            }
            return null;
          }),
          MONTH.length,
        );
      case 'Last Day':
        return transform(
          data.map((click) => {
            const clickDate = new Date(click.dateClicked);
            if (
              clickDate.getFullYear() === today.getFullYear()
              && clickDate.getMonth() === today.getMonth()
              && clickDate.getDate() === today.getDate()
            ) {
              return clickDate.getHours();
            }
            return null;
          }),
          24,
        );
      case 'Last Week':
        return transform(
          data.map((click) => {
            const clickDate = new Date(click.dateClicked);
            if (
              clickDate.getFullYear() === today.getFullYear()
              && clickDate.getMonth() === today.getMonth()
              && today.getDay() - clickDate.getDay() < 7
              && today.getDay() - clickDate.getDay() > -7
            ) {
              return clickDate.getDay() - 1;
            }
            return null;
          }),
          7,
        );
      case 'Last Month':
        return transform(
          data.map((click) => {
            const clickDate = new Date(click.dateClicked);
            if (
              clickDate.getFullYear() === today.getFullYear()
              && clickDate.getMonth() === today.getMonth()
            ) {
              return clickDate.getDate() - 1;
            }
            return null;
          }),
          daysInThisMonth,
        );
      default:
        return [];
    }
  };

  const sortOptions = ['Last Year', 'Last Day', 'Last Week', 'Last Month'];

  const handleClick = () => setIsOpen(!isOpen);

  const datasets = {
    labels: setLabel(),
    datasets: [
      {
        data: proccessData(),
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
    <div className="md:h-[496px] h-[240px] 3xl:w-[1032px] md:w-[504px] lg:w-[640px] w-full px-5 py-5 lg:px-8 flex flex-col space-y-3 md:space-y-7  bg-white rounded">
      <div className="flex justify-between">
        <h1 className="font-bold text-base md:text-xl">Times Clicked On</h1>
        <div
          aria-hidden
          className="w-[128px] h-11 text-base text-gdscGrey-700 p-2 lg:p-3 outline-none bg-[#F0F5F7] mt-3 mx-0 self-end text-left cursor-pointer rounded block md:mt-1 md:mr-3 focus:outline-none"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={handleClick}
        >
          <span className="flex items-center justify-between">
            <span className="truncate leading-11">{option}</span>
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
                <button
                  aria-hidden
                  type="button"
                  key={el}
                  className="block"
                  onClick={() => {
                    setOption(el);
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
  data: PropTypes.instanceOf(Array).isRequired,
};
