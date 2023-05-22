import { create} from "zustand";
import { devtools,persist} from 'zustand/middleware'

export const useUser = create(persist(devtools(set => ({
    role : "",
    isAuth: false,
    errorMessage: "",
    SetIsAuth: (bool) => set( () => {
        return {isAuth : bool}
    }),
    SetRole : (obj) => set( () => {
        return {role : obj}
    }),
    SetMes : (bool) => set( () => {
        return {errorMessage : bool}}
    )
})),
    {name: "user-storage" }
))


export const useProjects = create(devtools(set => ({
    projects : [],
    setProjects : (arr) => set ( () => {
        return {projects: arr} 
    }),
    AddProject : (obj) => set(state => {
        return {projects: [...state.projects, obj]}
    }),
    isClickedProject : false,
    setIsClicked : (bool) => set( () => {
        return {isClickedProject : bool}
    })
})))

export const useTasks = create(devtools(set => ({
    tasks: [],
    setTasks : (arr) => set ( () => {
        return {tasks: arr} 
    })
})))

export const useEmployee = create(devtools(set => ({
    employees: [],
    setEmployees : (arr) => set ( () => {
        return {employees: arr} 
    })
})))

