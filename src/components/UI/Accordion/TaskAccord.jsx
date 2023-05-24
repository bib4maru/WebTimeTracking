import { Accordion, AccordionDetails, AccordionSummary, Container, Typography,Box,TextField,Fab,Stack } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import CustomChip from '../Chip/CustomChip';
import Timecounter from '../TimeCounters/Timecounter';

const TaskAccord = (props) => {
    return (
        <Container
            sx={{
                width: '100%',
                mt: 3
            }}
        >
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography>{props.task}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography className='task__props'>Проект: пвыпвапв</Typography>
                    <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                        <TextField label="Описание задачи" color='secondary' multiline 
                        defaultValue="fsafs" fullWidth
                        />
                        <Fab size='medium' color='secondary'>
                            <SaveIcon/>
                        </Fab>
                    </Box>
                    <Typography
                        sx={{
                            textAlign:"center",
                        }}
                    >Список сотрудников, назначенных на задачу:</Typography>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap"
                        sx={{
                            mb: 4,
                            mt: 4,
                        }}
                    >
                        <CustomChip name="Иванов Иван Иванович" />
                        <CustomChip name="Иванов Диназаур Иванович" />
                        <CustomChip name="Иванов Иван Иванович" />
                        <CustomChip name="Иванов Диназаур Иванович" />
                        <CustomChip name="Иванов Иван Иванович" />
                        <CustomChip name="Иванов Диназаур Иванович" />
                        <CustomChip name="Иванов Иван Иванович" />
                        <CustomChip name="Иванов Диназаур Иванович" />
                    </Stack>
                    {/* <Timecounter/> */}
                </AccordionDetails>
            </Accordion>

        </Container>
    );
};

export default TaskAccord;