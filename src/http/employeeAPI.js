import { api } from "."


export const CreateEmployee = async (first_name, last_name, patronomyc, login, password) => {
    const {data} = await api.post('/employees/', {first_name, last_name, patronomyc, login, password});
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