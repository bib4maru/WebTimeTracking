import { api } from "."


export const CreateTask = async (task_name, task_description, project_name) => {
    const {data} = await api.post('/tasks/', {task_name, task_description, project_name});
    return data
}

export const getAllTasks = async () => {
    const {data} = await api.get('/tasks/');
    return data
}
