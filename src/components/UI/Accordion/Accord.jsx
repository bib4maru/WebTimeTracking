import { Accordion, AccordionDetails, AccordionSummary,Container, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Timecounter from '../TimeCounters/Timecounter';

const Accord = (props) => {
    return (
        <Container
            sx={{
                width: '100%',
                mt: 3
            }}
        >
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{props.task}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography className='task__props'>Проект: {props.project}</Typography>
                    <Typography className='task__props'>Описание задачи: {props.descr}</Typography>
                    <Timecounter/>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default Accord;