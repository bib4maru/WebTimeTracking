import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import TaskStatic from '../components/TaskStatic';
import CustomDial from '../components/UI/Buttons/CustomDial';
import AddEmployeeTask from '../components/UI/modals/AddEmployeeTask';
import CreateTaskModal from '../components/UI/modals/CreateTaskModal';

const TasksPage = () => {
    return (
        <div>
            <Headerbar/>
            <TaskStatic/>
            <CustomDial action="Добавить задачу" />
            <AddEmployeeTask/>
            <CreateTaskModal/>
        </div>
    );
};

export default TasksPage;