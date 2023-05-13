import { Container, Typography } from '@mui/material';
import React from 'react';
import ProjectAccord from './UI/Accordion/ProjectAccord';

const ProjectStatic = () => {
    return (
        <Container
            sx={{
                border: "2px solid #5e35b1",
                borderRadius: "6px",
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "sm",
                paddingBottom: 7,
                paddingTop: 7,
            }}
        >
            <Typography variant='h4'>Проекты</Typography>
            <ProjectAccord project="большой проект" descr="Сделать что-то там" />
            <ProjectAccord project="большой проект" descr="Сделать что-то там" />
            <ProjectAccord project="большой проект" descr="Сделать что-то там" />
            <ProjectAccord project="большой проект" descr="Сделать что-то там" />
        </Container>
    );
};

export default ProjectStatic;