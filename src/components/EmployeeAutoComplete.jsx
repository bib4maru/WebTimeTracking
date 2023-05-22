import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useEmployee } from '../store/store';
import {shallow} from 'zustand/shallow';
import { getAllEmployees } from '../http/employeeAPI';

// const options = [
//     {name: "Сотрудник 1"},{name: "Сотрудник 2"},{name: "Сотрудник 3"},{name: "Сотрудник 4"},{name: "Сотрудник 5"},{name: "Сотрудник 6"},
// ];

const EmployeeAutoComplete = () => {
    const {employees,setEmployees} = useEmployee(state => ({employees: state.employees, setEmployees: state.setEmployees}),shallow);

    useEffect(() => {
        getAllEmployees().then(data => setEmployees(data));
    },[]);

    return (
        <Autocomplete
            sx={{ width: 600 }}
            options={employees} getOptionLabel={(option) => `${option.last_name} ${option.first_name}`} 
            renderInput={(params) => <TextField {...params} label="Поиск сотрудников" color='secondary' fullWidth margin='normal' />}
        />
    );
};

export default EmployeeAutoComplete;