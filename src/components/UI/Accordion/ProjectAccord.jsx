import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Fab, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomChip from '../Chip/CustomChip';
import Timecounter from '../TimeCounters/Timecounter';
import SaveIcon from '@mui/icons-material/Save';
import { getOneProject } from '../../../http/projectAPI';
import {shallow} from 'zustand/shallow';
import { useSingleProject } from '../../../store/store';
import { ComputeTime } from '../../../utils/ComputeTime';
const ProjectAccord = (props) => {

    const template = {project_description: "", Tasks:[], Users:[],HistoryOfWorks: []};
    const {project,setProject} = useSingleProject(state => ({project: state.project, setProject: state.setProject}),shallow)
    const handleClick = async (bool) => {
        if (bool) {
            const response = await getOneProject(props.project.id);
            if (response !== null) {setProject(response);}
            else {setProject(template)}
            console.log (project);
        }
    }

    return (
        <Container
            sx={{
                width: '100%',
                mt: 3
            }}
        >
            <Accordion onChange={(e,expanded) => handleClick(expanded)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{props.project.project_name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                        <TextField placeholder='Описание проекта' color='secondary' multiline 
                        value={project.project_description} fullWidth
                        />
                        <Fab size='medium' color='secondary'>
                            <SaveIcon/>
                        </Fab>
                    </Box>
                    <Typography
                        sx={{
                            textAlign:"center",
                        }}
                    >Список задач:</Typography>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap"
                        sx={{
                            mb: 4,
                            mt: 4,
                        }}
                    >  
                        {project.Tasks.map((task) => (
                            <CustomChip name={task.task_name} key={task.id} />
                        ))}
                    </Stack>
                    <Typography
                        sx={{
                            textAlign:"center",
                        }}
                    >Список сотрудников на проекте:</Typography>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap"
                        sx={{
                            mb: 4,
                            mt: 4,
                        }}
                    >
                        {project.Users.map((user) => (
                            <CustomChip key={user.id} name={`${user.last_name} ${user.first_name} ${user.patronomyc}`}  />
                        ))}
                    </Stack>
                    <Timecounter project= {project} />
                </AccordionDetails>
            </Accordion>


        </Container>
    );
};

export default ProjectAccord;