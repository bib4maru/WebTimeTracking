import { Container, Typography } from '@mui/material';
import React from 'react';
import Timecounter from './UI/TimeCounters/Timecounter';
import DateRangePicker from './UI/DateRange/DateRangePicker';
import Accord from './UI/Accordion/Accord';
import Charts from './UI/Graphs/Charts';
const UserStatistic = () => {
    const employee = [{
        id : 1,
        name : "Иван",
        surname : "Иванов",
        patronymic: "Иванович",
        login : "ivan222",
        password: "ivan222",
    }]
    const timehistory = [{id: 1, date: "05/09/2023", useful_time: 7, useless_time: 1, employer_id: 1, task_id: 1}]

    const tasks = [{id: 1, name: "Создание фронтенд части сайта", 
    project: "Создание сайта для компании", desr: "Создание фронтенд части сайта, используя современные JS фреймворки"}]


    
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
            <Typography sx={{mt: 3, mb: 2}}>{employee[0].surname} {employee[0].name} {employee[0].patronymic}</Typography>
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
            <Accord task={tasks[0].name} project={tasks[0].project} description={tasks[0].desr} />
            <Accord task="Задача 1" />
            <Accord task="Задача 1" />
            <Accord task="Задача 1" />
        </Container>
    );
};

export default UserStatistic;