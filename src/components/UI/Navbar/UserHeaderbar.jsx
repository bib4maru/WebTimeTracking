import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserHeaderbar = () => {
    return (
        <AppBar position='fixed' color='primary' 
        sx={
            {boxShadow: "none", backdropFilter: "blur(8px)", alignItems: "end",borderStyle: "solid", 
            borderWidth: "0px 0px thin", borderColor: "#e7ebf0", zIndex: "1100", background: 'transparent'}} >
            <Toolbar>
                <IconButton edge="end" color="secondary" sx={{mr: 5}}>
                    <AccountCircleIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default UserHeaderbar;