import { Autocomplete, Box, Dialog, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import React from 'react';


const options = [
    {title: "Проект 1"},{title: "Проект 2"},{title: "Проект 3"},{title: "Проект 4"},{title: "Проект 5"},{title: "Проект 6"},
];
const CreateTaskModal = () => {
    return (
        <Dialog open={false}>
            <DialogTitle>Создание задачи</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Autocomplete options={options} getOptionLabel={(option) => option.title} renderInput={(params) => <TextField {...params} label="Проекты" color='secondary' margin='normal' /> }/>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='taskName'
                        label='Название задачи'
                        name='taskName'
                        autoFocus
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='taskDescr'
                        label='Описание задачи'
                        name='taskDescr'
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                    >
                        Создать задачу
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTaskModal;