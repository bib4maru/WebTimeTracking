import { api } from "."
import jwt_decode from 'jwt-decode';

export const registration = async (first_name, last_name, patronomyc, login, password, company_name) => {
    const response = await api.post('/auth/registration', {first_name, last_name, patronomyc, login, password, company_name})
    return response
}

export const login = async (login, password) => {
    const {data} = await api.post('/auth/login', {login, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}

export const check = async () => {
    const response = await api.post('/auth/login')
    return response
}