import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProjectAccord from './UI/Accordion/ProjectAccord';
import { getAllProjects } from '../http/projectAPI';
import { useProjects } from '../store/store';
import {shallow} from 'zustand/shallow';

const ProjectStatic = () => {
    const [isLoading,setIsLoading]= useState(false);
    const {projects,setProjects} = useProjects(state => ({projects: state.projects, setProjects: state.setProjects}),shallow);

    useEffect(()=> {
        getAllProjects().then(data => setProjects(data));
    },[]);


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
            {projects.map((project) => (
                <ProjectAccord project={project} key={project.id} />
            ))}
        </Container>
    );
};

export default ProjectStatic;