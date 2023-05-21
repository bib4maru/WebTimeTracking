import React from 'react';
import { AdminRoutes,EmployeeRoutes,noAuthRoutes } from '../routes/routes';
import {Route,Routes} from "react-router-dom";
import { useUser } from '../store/store';
const AppRouter = () => {
    let isAuth = useUser(state => state.isAuth);
    let role = useUser(state => state.role);
    return (
        <Routes>
            { isAuth && role === "Руководитель" && AdminRoutes.map(({path, element}) => 
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