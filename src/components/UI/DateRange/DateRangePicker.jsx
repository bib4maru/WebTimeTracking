import { Box } from '@mui/material';
import React from 'react';
import DatePick from './DatePick';

const DateRangePicker = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10
            }}
        >
            <DatePick label="Начало интервала" />
            <DatePick label="Конец интервала"/>
        </Box>
    );
};

export default DateRangePicker;