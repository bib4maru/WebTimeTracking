import React from 'react';
import { AdminRoutes,EmployeeRoutes,noAuthRoutes } from '../routes/routes';
import {Route,Routes} from "react-router-dom";
const AppRouter = () => {
    let isAuth = false;
    let role = "admin";
    return (
        <Routes>
            { isAuth && role === "admin" && AdminRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />)
            }
            {isAuth && role === "employee" && EmployeeRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />)
            }
            {!isAuth && noAuthRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />)
            }
        </Routes>
    );
};

export default AppRouter;