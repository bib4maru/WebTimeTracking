import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from '@mui/material';
import React from 'react';
import Timecounter from './UI/TimeCounters/Timecounter';
import DateRangePicker from './UI/DateRange/DateRangePicker';
import Accord from './UI/Accordion/Accord';
import Charts from './UI/Graphs/Charts';
const UserStatistic = () => {
    return (
        <Container
            sx={{
                border: "2px solid #5e35b1",
                borderRadius: "6px",
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "sm",
                paddingBottom: 7,
                paddingTop: 7,
            }}
        >
            <Typography variant='h4'>Личная статистика</Typography>
            <Typography sx={{mt: 3, mb: 2}}>ФИО</Typography>
            <DateRangePicker/>
            <Timecounter/>
            <Typography variant='h5'
                sx={{
                    textAlign: "center"
                }}
            >
                Диаграммы
            </Typography>
            <Charts/>
            <Typography variant='h5'
                sx={{
                    textAlign: "center"
                }}
            >
                Список задач
            </Typography>
            <Accord task="Задача 1" />
            <Accord task="Задача 1" />
            <Accord task="Задача 1" />
            <Accord task="Задача 1" />
        </Container>
    );
};

export default UserStatistic;