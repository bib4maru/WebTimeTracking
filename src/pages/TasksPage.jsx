import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import TaskStatic from '../components/TaskStatic';
import AddEmployeeTask from '../components/UI/modals/AddEmployeeTask';
import CreateTaskModal from '../components/UI/modals/CreateTaskModal';
import AddBtnTask from '../components/UI/Buttons/AddBtnTask';

const TasksPage = () => {
    return (
        <div>
            <Headerbar/>
            <TaskStatic/>
            <AddBtnTask/>
            <AddEmployeeTask/>
            <CreateTaskModal/>
        </div>
    );
};

export default TasksPage;