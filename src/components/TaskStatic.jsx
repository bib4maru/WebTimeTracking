import { Container,Typography } from '@mui/material';
import React, { useEffect } from 'react';
import TaskAccord from './UI/Accordion/TaskAccord';
import { useTask, useProjects } from '../store/store';
import {shallow} from 'zustand/shallow';
import { getAllTasks } from '../http/taskAPI';
import { getAllProjects } from '../http/projectAPI';
const TaskStatic = () => {
    const {tasks, setTasks} = useTask(state => ({tasks: state.tasks, setTasks: state.setTasks}),shallow);
    const setProjects = useProjects(state => (state.setProjects));

    useEffect(() => {
        getAllTasks().then(data => setTasks(data));
        getAllProjects().then(data => setProjects(data));
    },[])
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
            <Typography variant='h4'>Задачи</Typography>
            {tasks.map(task => (
                <TaskAccord task ={task} key = {task.id}/>
            ))}
        </Container>
    );
};

export default TaskStatic;