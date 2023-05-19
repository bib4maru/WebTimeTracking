import React from 'react';
import {Route,Routes} from "react-router-dom";
import Authorization from '../pages/Authorization';
import User from '../pages/User';
import AdminMain from '../pages/AdminMain';
import ProjectPage from '../pages/ProjectPage';
import TasksPage from '../pages/TasksPage';
import EmployeesPage from '../pages/EmployeesPage';
import Registration from '../pages/Registration';
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth' element={<Authorization/>} />
            <Route path='/user' element={<User/>}/>
            <Route path='/main' element={<AdminMain/>}/>
            <Route path='/projects' element={<ProjectPage/>} />
            <Route path='/tasks' element={<TasksPage/>} />
            <Route path='/employees' element={<EmployeesPage/>}/>
            <Route path='/reg' element={<Registration/>}/>
        </Routes>
    );
};

export default AppRouter;