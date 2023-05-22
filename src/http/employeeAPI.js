import { api } from "."


export const postProject = async (project_name, project_description, estimate_time) => {
    const {data} = await api.post('/projects/', {project_name, project_description, estimate_time});
    return data
}

export const getAllEmployees = async () => {
    const {data} = await api.get('/employees/');
    return data
}

export const check = async () => {
    const response = await api.post('/auth/login')
    return response
}