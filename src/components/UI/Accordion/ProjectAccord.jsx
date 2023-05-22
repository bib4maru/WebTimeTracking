import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Fab, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomChip from '../Chip/CustomChip';
import Timecounter from '../TimeCounters/Timecounter';
import SaveIcon from '@mui/icons-material/Save';
const ProjectAccord = (props) => {
    return (
        <Container
            sx={{
                width: '100%',
                mt: 3
            }}
        >
            <Accordion>
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
                        <TextField label="Описание проекта" color='secondary' multiline 
                        defaultValue='aboba' fullWidth
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
                        <CustomChip name="Составить такмлыщашыоыагщыщгарыагрыгр9гырпш0роы9рпррыfahia"/>
                        <CustomChip name="Составить гг"/>
                        <CustomChip name="Составить бб"/>
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
                        <CustomChip name="Иванов Иван Иванович" />
                        <CustomChip name="Иванов Диназаур Иванович" />
                    </Stack>
                    <Timecounter/>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
};

export default ProjectAccord;