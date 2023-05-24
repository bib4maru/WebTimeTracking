import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Timecounter from './UI/TimeCounters/Timecounter';
import DateRangePicker from './UI/DateRange/DateRangePicker';
import Accord from './UI/Accordion/Accord';
import Charts from './UI/Graphs/Charts';
import { useDate, useEmployee } from '../store/store';
import { getOneEmployee } from '../http/employeeAPI';

const UserStatistic = () => {

    const timehistory = [{id: 1, date: "05/09/2023", useful_time: 7, useless_time: 1, employer_id: 1, task_id: 1}]

    const tasks = [{id: 1, name: "Создание фронтенд части сайта", 
    project: "Создание сайта для компании", desr: "Создание фронтенд части сайта, используя современные JS фреймворки"}]
    const {toDate,setToDate} = useDate(state => ({toDate: state.toDate, setToDate: state.setToDate}));
    const {fromDate,setFromDate} = useDate(state => ({fromDate: state.fromDate, setFromDate: state.setFromDate}));
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
    const handleClick = (e) => {
        e.preventDefault();
        console.log(fromDate);
        console.log(toDate);
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
            {/* <Timecounter/> */}
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