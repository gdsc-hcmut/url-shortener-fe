import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'index.css';

import urlAction from 'actions/url';
import { ReactComponent as EditExpireIcon } from 'assets/icons/edit_expire_icon.svg';
import { ReactComponent as ExpireTimeIcon } from 'assets/icons/expire_time_icon.svg';

export default function ExpireTime({ expireTime, id }) {
  const [currTime, setCurrTime] = useState(new Date(expireTime));
  const [time, setTime] = useState(new Date(expireTime));
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { newExpireTime } = useSelector((state) => state.url);

  useEffect(() => {
    if (newExpireTime) {
      setTime(new Date(newExpireTime));
    }
  }, [newExpireTime]);

  return (
    <div className="h-[116px] md:h-[100px] 3xl:h-32 3xl:w-[504px] md:w-[504px] lg:w-[312px] w-full py-7 md:py-3 3xl:py-7 px-5 flex justify-between bg-white rounded">
      <div className="h-[72px] w-[72px] bg-opacity-10 bg-gdscRed-300 rounded flex justify-center items-center ">
        <ExpireTimeIcon />
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="text-gdscRed-300 text-xl lg:text-lg 3xl:text-2xl font-normal truncate">
          {time.getTime() < new Date().getTime() ? (
            ' Expired'
          ) : (
            <span>
              <span className="hidden 3xl:inline">
                {`${new Intl.DateTimeFormat('en-US', {
                  weekday: 'long',
                }).format(time)}`}
              </span>
              <span>{` ${time.getDate()}/${time.getMonth() + 1}`}</span>
              <span>{`/${time.getFullYear()}`}</span>
              <span>{` ${time.toLocaleTimeString()}`}</span>
            </span>
          )}
        </span>
        <span className="font-normal text-base inline-flex justify-center items-center">
          <span className>Expire Time</span>
          <span
            aria-hidden
            className="ml-4 lg:ml-1 3xl:ml-4 w-[100px] lg:w-[84px] 3xl:w-[100px] h-7 rounded-[60px] flex justify-center items-center px-7 lg:px-5 3xl:px-7 bg-[#DA4436] bg-opacity-10 active:bg-opacity-20 hover:cursor-pointer"
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
            value={currTime}
            allowSameDateSelection
            onChange={(curr) => {
              setCurrTime(curr);
            }}
            onAccept={() => {
              dispatch(urlAction.editExpireTime(id, currTime.toString(0)));
              setOpen(false);
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
