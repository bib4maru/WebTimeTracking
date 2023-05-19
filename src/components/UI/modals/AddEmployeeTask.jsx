import { Autocomplete, Box, Dialog, DialogContent, Checkbox, TextField,DialogTitle,Button } from '@mui/material';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const options = [
    {title: "Проект 1"},{title: "Проект 2"},{title: "Проект 3"},{title: "Проект 4"},{title: "Проект 5"},{title: "Проект 6"},
];

const AddEmployeeTask = () => {
    return (
        <Dialog open={false}>
            <DialogTitle>Добавление сотрудника на задачу</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Autocomplete options={options} getOptionLabel={(option) => option.title} renderInput={(params) => <TextField {...params} label="Задачи" color='secondary' margin='normal' /> }/>
                    <Autocomplete
                    multiple
                    options={options}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                        <Checkbox
                            color='secondary'
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.title}
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
                    >
                        Добавить сотрудника
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddEmployeeTask;