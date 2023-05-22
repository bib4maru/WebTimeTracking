import { api } from "."


export const CreateTask = async (task_name, task_description, project_name) => {
    const {data} = await api.post('/tasks/', {task_name, task_description, project_name});
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