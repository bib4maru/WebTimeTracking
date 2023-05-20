import Authorization from "../pages/Authorization";
import User from '../pages/User';
import AdminMain from '../pages/AdminMain';
import ProjectPage from '../pages/ProjectPage';
import TasksPage from '../pages/TasksPage';
import EmployeesPage from '../pages/EmployeesPage';
import Registration from '../pages/Registration';
export const AdminRoutes = [
    {path: "/", element : <Authorization/>},
    {path: "/main", element : <AdminMain/> },
    {path: "/user/:id", element : <User/> },
    {path: "/projects", element : <ProjectPage/> },
    {path: "/tasks", element : <TasksPage/> },
    {path: "/employees", element : <EmployeesPage/> },
    {path: "/reg", element : <Registration/> }
]

export const EmployeeRoutes = [
    {path: "/", element : <Authorization/> },
    {path: "/user/:id", element : <User/> },
    {path: "/reg", element : <Registration/> }
]

export const noAuthRoutes = [
    {path: "/", element : <Authorization/> },
    {path: "/reg", element : <Registration/> }
]