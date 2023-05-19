import { Box, Dialog, DialogContent, DialogTitle,TextField,Button } from '@mui/material';
import React from 'react';

const CreateProjectModal = () => {

    return (
        <Dialog open={false}>
            <DialogTitle>Создание проекта</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='projectName'
                        label='Название проекта'
                        name='projectName'
                        autoFocus
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='projectDescr'
                        label='Описание проекта'
                        name='projectDescr'
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                    >
                        Создать проект
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CreateProjectModal;