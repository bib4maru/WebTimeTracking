import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePick = (props) => {
    const handleChange = (newvalue) => {
        props.setDate(newvalue);
    }
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label={props.label} value={props.date} onChange={handleChange} />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
};

export default DatePick;