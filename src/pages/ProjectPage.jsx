import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import ProjectStatic from '../components/ProjectStatic';
import CustomAddBtn from '../components/UI/Buttons/CustomAddBtn';

const ProjectPage = () => {
    return (
        <div>
            <Headerbar/>
            <ProjectStatic/>
            <CustomAddBtn/>
        </div>
    );
};

export default ProjectPage;