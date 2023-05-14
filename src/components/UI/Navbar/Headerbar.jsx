import { AppBar, Button, IconButton, Toolbar} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Headerbar = () => {
    const navigate = useNavigate();
    return (
        <AppBar position='fixed' color='primary' 
        sx={{boxShadow: "none", backdropFilter: "blur(8px)", borderStyle: "solid",
            borderWidth: "0px 0px thin", borderColor: "#e7ebf0", zIndex: "1100", background: 'transparent' }} 
        >
            <Toolbar>
                <IconButton edge="start" color="secondary" sx={{ml: "350px", mr: "100px"}} onClick={() => {navigate("/main")}}>
                    <HomeIcon/>
                </IconButton>
                <Button variant='text' size='large' color='secondary' sx={{mr: "80px"}} onClick={() => {navigate("/projects")}} >Проекты</Button>
                <Button variant='text' size='large' color='secondary'sx={{mr: "80px"}} onClick={() => navigate("/tasks")}>Задачи</Button>
                <Button variant='text' size='large' color='secondary' sx={{mr: "450px"}} onClick={() => navigate("/employees")}>Сотрудники</Button>
                <Button color="secondary">
                  Войти  
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Headerbar;