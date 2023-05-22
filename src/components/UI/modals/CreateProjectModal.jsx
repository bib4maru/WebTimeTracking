import { Box, Dialog, DialogContent, DialogTitle,TextField,Button } from '@mui/material';
import React, { useState } from 'react';
import { useProjects } from '../../../store/store';
import { postProject } from '../../../http/projectAPI';
import { getAllProjects } from '../../../http/projectAPI';

const CreateProjectModal = () => {
    const setStatus = useProjects(state => (state.setIsClicked));
    const AddProject = useProjects(state => (state.AddProject));
    const setProjects = useProjects(state => ( state.setProjects));
    const handleClose = () => {
        setStatus(false);
    }
    const [project,setProject] = useState({project_name: '', project_description: "", estimate_time: 0});

    const handleClick = async (e) => {
        try {
            e.preventDefault();
            await postProject(project.project_name,project.project_description,project.estimate_time);
            handleClose();
            getAllProjects().then(data => setProjects(data));
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <Dialog open={useProjects(state => (state.isClickedProject))} onClose={handleClose} >
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
                        value={project.project_name}
                        onChange={e => setProject({...project, project_name: e.target.value})}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='projectDescr'
                        label='Описание проекта'
                        name='projectDescr'
                        value={project.project_description}
                        onChange={e => setProject({...project, project_description: e.target.value})}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                        onClick={handleClick}
                    >
                        Создать проект
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CreateProjectModal;