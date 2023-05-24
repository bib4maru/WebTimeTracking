import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Timecounter from './UI/TimeCounters/Timecounter';
import DateRangePicker from './UI/DateRange/DateRangePicker';
import Accord from './UI/Accordion/Accord';
import Charts from './UI/Graphs/Charts';
import { useDate, useEmployee } from '../store/store';
import { getActivity, getOneEmployee } from '../http/employeeAPI';
import { formatDate } from '../utils/FormatDate';

const UserStatistic = () => {
    const template = {HistoryOfWorks: []}
    const {toDate,setToDate} = useDate(state => ({toDate: state.toDate, setToDate: state.setToDate}));
    const {fromDate,setFromDate} = useDate(state => ({fromDate: state.fromDate, setFromDate: state.setFromDate}));
    const [currActivity,setActivity] = useState({ HistoryOfWorks: []});
    const id = useEmployee(state => (state.id));
    const [curremployee,setCurrEmployee] = useState("");
    const handleOp = async() => {
        const response = await getOneEmployee(id);
        setCurrEmployee(response);
        console.log(curremployee);
    }
    useEffect (() => {
        handleOp();
    },[])
    const handleClick = async (e) => {
        e.preventDefault();
        const from = formatDate(fromDate);
        const to = formatDate(toDate);
        const response = await getActivity(id,from,to);
        if (response !== null) {setActivity(response);}
        else {setActivity(template);}
        console.log (response);

    }
    
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
            <Typography variant='h4'>Личная статистика сотрудника</Typography>
            <Typography sx={{mt: 3, mb: 2}}>{curremployee.last_name} {curremployee.first_name} {curremployee.patronomyc} </Typography>
            <DateRangePicker/>
            <Button color='secondary' variant='contained' sx={{ mb: 4}} onClick={handleClick}>Сформировать статистику</Button>
            <Timecounter project={currActivity} />
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
            {/* <Accord task={tasks[0].name} project={tasks[0].project} description={tasks[0].desr} />
            <Accord task="Задача 1" />
            <Accord task="Задача 1" />
            <Accord task="Задача 1" /> */}
        </Container>
    );
};

export default UserStatistic;