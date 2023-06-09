import { api } from "."


export const postProject = async (project_name, project_description, estimate_time) => {
    const {data} = await api.post('/projects/', {project_name, project_description, estimate_time});
    return data
}

export const getAllProjects = async () => {
    const {data} = await api.get('/projects/');
    return data
}

export const addEmployeeToProject = async (user_id,project_id) => {
    const {data} = await api.post('/employees/addToProject', {user_id,project_id});
    return data
}

export const getOneProject = async (id) => {
    const {data} = await api.get(`/projects/${id}`);
    return data;
}