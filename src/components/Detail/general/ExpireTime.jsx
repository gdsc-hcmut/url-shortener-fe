import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import 'index.css';

import urlAction from 'actions/url';
import { ReactComponent as EditExpireIcon } from 'assets/icons/edit_expire_icon.svg';
import { ReactComponent as ExpireTimeIcon } from 'assets/icons/expire_time_icon.svg';

export default function ExpireTime({ expireTime, id }) {
  const [time, setTime] = React.useState(new Date(expireTime));
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <div className="h-[116px] md:h-32 md:w-[504px] w-full py-7 px-5 flex justify-between mx-0 bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscRed-300 rounded flex justify-center items-center ">
        <ExpireTimeIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscRed-300 text-xl md:text-2xl font-normal truncate">
          {time.getTime() < new Date().getTime()
            ? ' Expired'
            : `${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
              time,
            )} ${time.getDate()}/${
              time.getMonth() + 1
            }/${time.getFullYear()} ${time.toLocaleTimeString()}`}
        </span>
        <span className="font-normal text-base inline-flex justify-center items-center">
          Expire Time
          <span
            aria-hidden
            className="ml-4 w-[100px] h-7 rounded-[60px] flex justify-center items-center px-7 bg-[#DA4436] bg-opacity-10 active:bg-opacity-20 hover:cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="inline-flex w-full justify-between items-center">
              <span className="text-base text-gdscRed-300">Edit</span>
              <EditExpireIcon />
            </span>
          </span>
        </span>
      </div>
      <div className="hidden">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateTimePicker
            value={time}
            allowSameDateSelection
            onChange={() => {}}
            onAccept={(newTime) => {
              dispatch(urlAction.editExpireTime(id, time.toString(0)));
              setOpen(false);
              setTime(newTime);
            }}
            onClose={() => setOpen(false)}
            open={open}
            minDate={new Date('2018-01-01T00:00')}
            inputFormat="yyyy/MM/dd hh:mm a"
            mask="___/__/__ __:__ _M"
            renderInput={(params) => (
              <TextField id="standard-basic" variant="standard" {...params} />
            )}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

ExpireTime.propTypes = {
  expireTime: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
