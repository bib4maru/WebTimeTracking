import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useEmployee } from '../store/store';
import {shallow} from 'zustand/shallow';
import { getAllEmployees } from '../http/employeeAPI';

const EmployeeAutoComplete = () => {
    const {employees,setEmployees} = useEmployee(state => ({employees: state.employees, setEmployees: state.setEmployees}),shallow);
    const {id,setId} = useEmployee(state => ({id: state.id, setId: state.setId}),shallow);

    useEffect(() => {
        getAllEmployees().then(data => setEmployees(data));
    },[]);

    return (
        <Autocomplete
            sx={{ width: 600 }}
            options={employees} getOptionLabel={(option) => `${option.last_name} ${option.first_name}`} 
            onChange={(e,newvalue) => setId(newvalue.id)}
            renderInput={(params) => <TextField {...params} label="Поиск сотрудников" color='secondary' fullWidth margin='normal' />}
        />
    );
};

export default EmployeeAutoComplete;