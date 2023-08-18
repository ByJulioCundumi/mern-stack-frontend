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
        const result = await getTasks()
        console.log(result)
        setTasks(result)
    }

    const getTaskRequest = async (id)=>{
        const result = await getTask(id)
        return result;
    }

    const postTaskRequest = async (value)=>{
        const result = await postTask(value)
        if(!!result.user) return console.log(result), setPostTasksMessage(null)
        setPostTasksMessage(result)
    }

    const putTaskRequest = async (id, value)=>{
        const result = await putTask(id, value)
        
    }

    const deleteTaskRequest = async (id)=>{
        const result = await deleteTask(id)
        setTasks((prev)=> prev.filter((task)=> task._id !== id))
        console.log(tasks)
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