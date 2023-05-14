import { Container,Typography } from '@mui/material';
import React from 'react';
import EmployeeList from './EmployeeList';
import CustomAddBtn from '../components/UI/Buttons/CustomAddBtn'
const EmployeeCont = () => {
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
            <Typography variant='h4'>Сотрудники</Typography>
            <EmployeeList/>
        </Container>
    );
};

export default EmployeeCont;