import { Container,Typography } from '@mui/material';
import React from 'react';
import TaskAccord from './UI/Accordion/TaskAccord';

const TaskStatic = () => {
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
            <TaskAccord project="smthprj" task="smthtask" descr="Сделать сайт" />
            <TaskAccord project="smthprj" task="smthtask" descr="Сделать сайт" />
            <TaskAccord project="smthprj" task="smthtask" descr="Сделать сайт" />
            <TaskAccord project="smthprj" task="smthtask" descr="Сделать сайт" />
            <TaskAccord project="smthprj" task="smthtask" descr="Сделать сайт" />
        </Container>
    );
};

export default TaskStatic;