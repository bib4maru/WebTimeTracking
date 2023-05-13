import React from 'react';
import {Route,Routes} from "react-router-dom";
import Authorization from '../pages/Authorization';
import User from '../pages/User';
import AdminMain from '../pages/AdminMain';
import ProjectPage from '../pages/ProjectPage';
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth' element={<Authorization/>} />
            <Route path='/user' element={<User/>}/>
            <Route path='/main' element={<AdminMain/>}/>
            <Route path='/' element={<ProjectPage/>} />
        </Routes>
    );
};

export default AppRouter;