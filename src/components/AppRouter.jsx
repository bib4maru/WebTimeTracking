import React from 'react';
import {Route,Routes} from "react-router-dom";
import Authorization from '../pages/Authorization';
import User from '../pages/User';
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Authorization/>} />
            <Route path='/user' element={<User/>}/>
        </Routes>
    );
};

export default AppRouter;