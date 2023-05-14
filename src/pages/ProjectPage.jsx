import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import ProjectStatic from '../components/ProjectStatic';
import CustomDial from '../components/UI/Buttons/CustomDial'
const ProjectPage = () => {
    return (
        <div>
            <Headerbar/>
            <ProjectStatic/>
            <CustomDial action="Добавить проект" />
        </div>
    );
};

export default ProjectPage;