import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const options = [
    {name: "Сотрудник 1"},{name: "Сотрудник 2"},{name: "Сотрудник 3"},{name: "Сотрудник 4"},{name: "Сотрудник 5"},{name: "Сотрудник 6"},
];

const EmployeeAutoComplete = () => {
    return (
        <Autocomplete
            sx={{ width: 600 }}
            options={options} getOptionLabel={(option) => option.name} 
            renderInput={(params) => <TextField {...params} label="Поиск сотрудников" color='secondary' fullWidth margin='normal' />}
        />
    );
};

export default EmployeeAutoComplete;