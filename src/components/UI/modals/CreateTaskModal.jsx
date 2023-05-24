import { Autocomplete, Box, Dialog, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useTask,useProjects } from '../../../store/store';
import { CreateTask } from '../../../http/taskAPI';
import { getAllTasks } from '../../../http/taskAPI';

const CreateTaskModal = () => {
    const setStatus = useTask(state => state.setIsClicked);
    const setTasks = useTask(state => (state.setTasks));
    const projects = useProjects(state => (state.projects));
    const [task,setTask] = useState({task_name: "", task_description: ""});
    const [currproject,setCurrProject] = useState("");
    const handleClose = () => {
        setStatus(false);
    }
    const CreateTaskClick = async (e) => {
        try{
            e.preventDefault();
            await CreateTask(task.task_name,task.task_description,currproject.project_name);
            handleClose();
            getAllTasks().then(data => setTasks(data));
        } catch (e) {
            alert(e.response.data.message);
        }
    }


    return (
        <Dialog open={useTask(state => state.isClicked)} onClose={handleClose}>
            <DialogTitle>Создание задачи</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Autocomplete options={projects} getOptionLabel={(option) => option.project_name} 
                    onChange={(e,newvalue) => setCurrProject(newvalue)}
                    renderInput={(params) => <TextField {...params} label="Проекты" color='secondary' margin='normal' /> }/>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='taskName'
                        label='Название задачи'
                        name='taskName'
                        value={task.task_name}
                        onChange={e => setTask({...task, task_name: e.target.value})}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='taskDescr'
                        label='Описание задачи'
                        name='taskDescr'
                        value={task.task_description}
                        onChange={e => setTask({...task, task_description: e.target.value})}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                        onClick={CreateTaskClick}
                    >
                        Создать задачу
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTaskModal;