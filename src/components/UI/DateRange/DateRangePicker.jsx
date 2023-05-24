import { Box } from '@mui/material';
import React from 'react';
import DatePick from './DatePick';
import { useDate } from '../../../store/store';

const DateRangePicker = () => {
    const {toDate,setToDate} = useDate(state => ({toDate: state.toDate, setToDate: state.setToDate}));
    const {fromDate,setFromDate} = useDate(state => ({fromDate: state.fromDate, setFromDate: state.setFromDate}));
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 5
            }}
        >
            <DatePick  date ={fromDate}  setDate={setFromDate}   label="Начало интервала"  />
            <DatePick date={toDate} label="Конец интервала" setDate={setToDate} />
        </Box>
    );
};

export default DateRangePicker;