import { Accordion, AccordionDetails, AccordionSummary, Container, Typography,Box,TextField,Fab,Stack } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import CustomChip from '../Chip/CustomChip';
import Timecounter from '../TimeCounters/Timecounter';
import { useTask } from '../../../store/store';
import { getOneTask } from '../../../http/taskAPI';

const TaskAccord = (props) => {
    const template = {task_description: "", Project : {}, Users:[], HistoryOfWorks: []}
    const {task,SetTask} = useTask (state => ({task: state.SingleTask, SetTask: state.setTask}));
    const handleClick = async (bool)  => {
        if (bool) {
            const response = await getOneTask(props.task.id);
            if (response !== null) {SetTask(response)}
            else {SetTask(template)}
        }
    }
    return (
        <Container
            sx={{
                width: '100%',
                mt: 3
            }}
        >
            <Accordion onChange={(e,expanded) => handleClick(expanded)} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography>{props.task.task_name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography className='task__props'>Проект: {task.Project.project_name}</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                        <TextField placeholder="Описание задачи" color='secondary' multiline 
                        value={task.task_description} fullWidth
                        />
                        <Fab size='medium' color='secondary'>
                            <SaveIcon/>
                        </Fab>
                    </Box>
                    <Typography
                        sx={{
                            textAlign:"center",
                        }}
                    >Список сотрудников, работающих над задачей:</Typography>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap"
                        sx={{
                            mb: 4,
                            mt: 4,
                        }}
                    >
                        {task.Users.map((user) => (
                            <CustomChip key={user.id} name={`${user.last_name} ${user.first_name} ${user.patronomyc}`}  />
                        ))}
                    </Stack>
                    <Timecounter project={task}/>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
};

export default TaskAccord;