import {useForm} from "react-hook-form"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { TasksContext } from "../../context/tasksContext"

const UpdateTask = ()=>{
    const {register, handleSubmit, formState: {errors}, setValue} = useForm()
    const {getTaskRequest, putTasksMessage, putTaskRequest} = useContext(TasksContext)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        const getUser = async ()=>{
            const task = await getTaskRequest(id);
            console.log(task)
            setValue("title", task.title)
            setValue("description", task.description)
        }
        getUser()
    },[])

    const onSubmit = handleSubmit((data)=>{
        putTaskRequest(data, id)
        navigate("/tasks")
    })

    return <>
        <div className="page">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 mt-5">

                        <form onSubmit={onSubmit} className="shadow rounded p-4">
                            {!!putTasksMessage && <span className="alert alert-success">Task-Updated</span>}
                            <h2 className="text-center">Update Task</h2>
                            <div className="mt-3">
                                <label htmlFor="title" className="active">Title</label>
                                <input type="text" id="title" className="form-control" {... register("title", {
                                    required: {
                                        value:true,
                                        message: "Please provide a title"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "The title is too short, add atleast 4 characters"
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: "The title most contain less than 40 characters"
                                    }
                                })}/>
                                {errors.title && <span className="text-danger ms-3">{errors.title.message}</span>}
                            </div>

                            <div className="mt-3">
                                <label htmlFor="description" className="active">Description</label>
                                <textarea id="description" className="form-control" {... register("description", {
                                    required: {
                                        value: true,
                                        message: "Please provide a description"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "The description provided is too long"
                                    }
                                })}/>
                                {errors.description && <span className="text-danger ms-3">{errors.description.message}</span>}
                            </div>
                            <div className="mt-3 d-flex justify-content-center">
                                <button className="btn btn-primary col-4">Update Task</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UpdateTask;