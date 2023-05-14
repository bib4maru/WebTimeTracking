import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import TaskStatic from '../components/TaskStatic';
import CustomDial from '../components/UI/Buttons/CustomDial';

const TasksPage = () => {
    return (
        <div>
            <Headerbar/>
            <TaskStatic/>
            <CustomDial action="Добавить задачу" />
        </div>
    );
};

export default TasksPage;