/* eslint-disable react/jsx-props-no-spreading */
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const weekday = new Array(7);
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  weekday[0] = 'Sunday';
  return (
    <div className="mt-2">
      <div className="mx-2 text-gdscRed-300">
        {weekday[value.getDay()]}
        , (
        {value.getDate()}
        /
        {value.getMonth()}
        /
        {value.getFullYear()}
        )
        {value.toLocaleTimeString()}
      </div>
      <div className="opacity-0">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateTimePicker
            value={value}
            allowSameDateSelection
            onChange={(newValue) => {
              setValue(newValue);
            }}
            onAccept={() => setOpen(false)}
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
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-gdscRed-300 w-[100px] h-7 bg-gdscRed-100 rounded-[60px] bg-opacity-50"
      >
        Edit
      </button>
    </div>
  );
}
