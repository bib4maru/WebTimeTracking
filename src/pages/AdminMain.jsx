import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar'
import { Typography } from '@mui/material';

const AdminMain = () => {
    return (
        <div className='Mainpage_container'>
            <Headerbar/>
            <Typography variant='h1'
                sx={{mt: 25,
                    textAlign: "center"
                }}
            > Добро пожаловать, user! </Typography>
        </div>
    );
};

export default AdminMain;