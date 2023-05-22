import { Autocomplete, Box, Dialog, DialogContent, Checkbox, TextField,DialogTitle,Button } from '@mui/material';
import React, { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEmployee, useProjects } from '../../../store/store';
import { addEmployeeToProject } from '../../../http/projectAPI';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const options = [
    {title: "Проект 1"},{title: "Проект 2"},{title: "Проект 3"},{title: "Проект 4"},{title: "Проект 5"},{title: "Проект 6"},
];
const AddEmployeeProject = () => {
    const setStatus = useProjects(state => (state.setIsClickedEmployee));
    const projects = useProjects(state => (state.projects));
    const employees = useEmployee(state => (state.employees));
    const [currproject,setCurrProject] = useState("");
    const [usersarr,setUsersArr] = useState('');

    const handleClick= async (e) => {
        try {
            e.preventDefault();
            const project_id = currproject.id;
            const user_id = usersarr.map(user => user.id);
            await addEmployeeToProject(user_id,project_id);
            handleClose();
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    const handleClose = () => {
        setStatus(false);
    };

    return (
        <Dialog open={useProjects(state => (state.isClickedEmployee))} onClose={handleClose}>
            <DialogTitle>Добавление сотрудника на проект</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Autocomplete options={projects} getOptionLabel={(option) => option.project_name} 
                    onChange={(e,newvalue) => setCurrProject(newvalue)}
                    renderInput={(params) => <TextField {...params} label="Проекты" color='secondary' margin='normal' /> }/>
                    <Autocomplete
                    multiple
                    options={employees}
                    disableCloseOnSelect
                    onChange={(e,newvalue) => setUsersArr(newvalue)}
                    getOptionLabel={(option) => `${option.last_name} ${option.first_name}`}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                        <Checkbox
                            color='secondary'
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.last_name} {option.first_name}
                        </li>
                    )}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                        <TextField {...params} label="Сотрудники" color='secondary' margin='normal' />
                    )}
                    />
                    <Button
                        color='secondary'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleClick}
                    >
                        Добавить сотрудника
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddEmployeeProject;