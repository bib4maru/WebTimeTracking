import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const Headerbar = () => {
    return (
        <AppBar position='static' color='primary' sx={{boxShadow: "none", backdropFilter: "blur(8px)" }} >
            <Toolbar>
                <IconButton edge="start" color="secondary" sx={{ml: "350px", mr: "100px"}}>
                    <HomeIcon/>
                </IconButton>
                <Typography variant='h6' color="secondary" sx={{mr: "80px"}} >
                    Проекты
                </Typography>
                <Typography variant='h6' color="secondary" sx={{flexGrow: 1}}>
                    Сотрудники
                </Typography>
                <Button color="secondary">
                  Войти  
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Headerbar;