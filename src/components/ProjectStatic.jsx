import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProjectAccord from './UI/Accordion/ProjectAccord';
import { getAllProjects } from '../http/projectAPI';
import { useEmployee, useProjects } from '../store/store';
import {shallow} from 'zustand/shallow';
import { getAllEmployees } from '../http/employeeAPI';

const ProjectStatic = () => {
    const [isLoading,setIsLoading]= useState(false);
    const setEmployees = useEmployee(state => (state.setEmployees));
    const {projects,setProjects} = useProjects(state => ({projects: state.projects, setProjects: state.setProjects}),shallow);

    useEffect(()=> {
        getAllProjects().then(data => setProjects(data));
        getAllEmployees().then(data => setEmployees(data));
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