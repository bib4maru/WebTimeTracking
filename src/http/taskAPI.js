import { api } from "."


export const CreateTask = async (task_name, task_description, project_name) => {
    const {data} = await api.post('/tasks/', {task_name, task_description, project_name});
    return data
}

export const getAllTasks = async () => {
    const {data} = await api.get('/tasks/');
    return data
}

export const getOneTask = async (id) => {
    const {data} = await api.get(`/tasks/${id}`);
    return data
}

export const getTaskActivity = async (user_id,fromDate,toDate,task_id) => {
    const {data} = await api.post(`/employees/${user_id}/activity?from=${fromDate}&to=${toDate}` , {task_id});
    return data
}

