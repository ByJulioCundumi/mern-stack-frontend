import { createContext, useState } from "react";
import { getTask, deleteTask, getTasks, postTask, putTask } from "../api/tasks";

export const TasksContext = createContext()

const TasksProvider = ({children})=>{
    const [tasks, setTasks] = useState(null)
    const [allTasksMessage, setAllTasksMessage] = useState(null)
    const [taskMessage, setTasksMessage] = useState(null)
    const [postTasksMessage, setPostTasksMessage] = useState(null)
    const [putTasksMessage, setPutTasksMessage] = useState(null)
    const [deleteTasksMessage, setDeleteTasksMessage] = useState(null)

    const getTasksRequest = async ()=>{
        const resutl = await getTasks()
        
    }

    const getTaskRequest = async (id)=>{
        const resutl = await getTask(id)
        
    }

    const postTaskRequest = async (value)=>{
        const result = await postTask(value)
        if(!!result.user) return console.log(result), setPostTasksMessage(null)
        setPostTasksMessage(result)
    }

    const putTaskRequest = async (id, value)=>{
        const resutl = await putTask(id, value)
        
    }

    const deleteTaskRequest = async (id)=>{
        const resutl = await deleteTask(id)
        
    }

  
    return <TasksContext.Provider value = {
        {
            tasks, allTasksMessage, taskMessage, postTasksMessage, 
            putTasksMessage, deleteTasksMessage, getTasksRequest, 
            getTaskRequest, postTaskRequest, putTaskRequest, deleteTaskRequest
        }
        }>
        {children}
    </TasksContext.Provider>
}

export default TasksProvider;