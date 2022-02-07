/* eslint-disable react/jsx-props-no-spreading */
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(new Date());
  return (
    <div className="mt-2">
      <div className="mx-2 text-gdscRed-200">
        {value.toDateString()}
        {' '}
        {value.toLocaleTimeString()}
      </div>
      <div className="bg-white text-gdscRed-300">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateTimePicker
            value={value}
            allowSameDateSelection
            onChange={(newValue) => {
              setValue(newValue);
            }}
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
