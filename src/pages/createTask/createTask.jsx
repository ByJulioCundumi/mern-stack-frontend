import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../../context/tasksContext";

const CreateTask = ()=>{
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {postTaskRequest, postTasksMessage} = useContext(TasksContext)
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data)=>{
        postTaskRequest(data)
        navigate("/tasks")
    })

    return <>
        <div className="page">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 mt-5">

                        <form onSubmit={onSubmit} className="shadow rounded p-4">
                            {!!postTasksMessage && <span className="alert alert-success">Task-saved</span>}
                            <h2 className="text-center">Create Task</h2>
                            <div className="form-floating mt-3">
                                <input type="text" id="title" className="form-control" placeholder="" {... register("title", {
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
                                <label htmlFor="title">Title</label>
                                {errors.title && <span className="text-danger ms-3">{errors.title.message}</span>}
                            </div>

                            <div className="form-floating mt-3">
                                <textarea id="description" className="form-control" placeholder="" {... register("description", {
                                    required: {
                                        value: true,
                                        message: "Please provide a description"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "The description provided is too long"
                                    }
                                })}/>
                                <label htmlFor="description">Description</label>
                                {errors.description && <span className="text-danger ms-3">{errors.description.message}</span>}
                            </div>
                            <div className="mt-3 d-flex justify-content-center">
                                <button className="btn btn-primary col-4">Save Task</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CreateTask;