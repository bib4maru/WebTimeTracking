import { api } from "."


export const registration = async (first_name, last_name, patronomyc, login, password, company_name) => {
    const responce = await api.post('/auth/registration', {first_name, last_name, patronomyc, login, password, company_name})
    return responce
}

export const login = async (login, password) => {
    const responce = await api.post('/auth/login', {login, password})
    return responce
}

export const check = async () => {
    const responce = await api.post('/auth/login')
    return responce
}