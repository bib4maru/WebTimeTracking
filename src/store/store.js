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
    }),
    isClickedEmployee : false,
    setIsClickedEmployee : (bool) => set( () => {
        return {isClickedEmployee: bool}
    })
})))

export const useTasks = create(devtools(set => ({
    tasks: [],
    setTasks : (arr) => set ( () => {
        return {tasks: arr} 
    })
})))

export const useEmployee = create(persist(devtools(set => ({
    employees: [],
    setEmployees : (arr) => set ( () => {
        return {employees: arr} 
    }),
    isClicked : false,
    setIsClicked : (bool) => set( () => {
        return {isClicked : bool}
    }),
    id : "",
    setId : (newId) => set( () => {
        return {id : newId}
    }),
})),
    {name: "employee-storage" }
))

export const useTask = create(set => ({
    tasks: [],
    setTasks : (arr) => set ( () => {
        return {tasks: arr}
    }),
    isClicked: false,
    setIsClicked : (bool) => set( () => {
        return {isClicked : bool}
    }),
    SingleTask: {task_description: "", Project : {}, Users:[], HistoryOfWorks: []},
    setTask : (obj) => set ( () => {
        return {SingleTask: obj} 
    }),
}))

export const useSingleProject = create(set => ({
    project : {project_description: "", Tasks:[], Users:[], HistoryOfWorks: []},
    setProject : (obj) => set ( () => {
        return {project: obj} 
    }),
}))

export const useDate = create(set => ({
    fromDate: "",
    toDate: "",
    setFromDate : (date) => set( () => {
        return {fromDate : date} 
    }),
    setToDate : (date) => set( () => {
        return {toDate : date} 
    }),
}))

