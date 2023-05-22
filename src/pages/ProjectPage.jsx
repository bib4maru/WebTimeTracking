import {React} from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import ProjectStatic from '../components/ProjectStatic';
import CustomDial from '../components/UI/Buttons/CustomDial'
import CreateProjectModal from '../components/UI/modals/CreateProjectModal';
import AddEmployeeProject from '../components/UI/modals/AddEmployeeProject';
const ProjectPage = () => {

    return (
        <div>
            <Headerbar/>
            <ProjectStatic/>
            <CustomDial action="Добавить проект" />
            <CreateProjectModal/>
            <AddEmployeeProject/>
        </div>
    );
};

export default ProjectPage;