import "./login.css";
import {useForm} from "react-hook-form"
import {Link, useNavigate} from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, watch} = useForm()
    const onSubmit = handleSubmit((data)=>{
        navigate("/register")
    })

    return <>
        <div className="container">
            <div className="row justify-content-center align-items-center login">
                <div className="col-12 col-md-6">

                <form onSubmit={onSubmit} className="shadow px-5 py-3 rounded">
                    <h1 className="m-3 text-center">Login</h1>
                    <div className="form-floating mt-3">
                        <input type="email" id="email" className="form-control" placeholder="" {... register("email", {
                            required: {
                                value: true,
                                message: "Please provide an email"
                            },
                            minLength: {
                                value: 12,
                                message: "The email provided is too short"
                            },
                            maxLength: {
                                value: 30,
                                message: "The email provided is too long"
                            }
                        })}/>
                        <label htmlFor="email">Email</label>
                        {errors.email && <span className="text-danger ms-3">{errors.email.message}</span>}
                    </div>
                    <div className="form-floating mt-3">
                        <input type="password" id="password" className="form-control" placeholder="" {... register("password", {
                            required: {
                                value: true,
                                message: "Please provide a password"
                            },
                            minLength: {
                                value: 4,
                                message: "The password provided is too short"
                            },
                            maxLength: {
                                value: 30,
                                message: "The password provided is too long"
                            }
                        })}/>
                        <label htmlFor="password">Password</label>
                        {errors.password && <span className="text-danger ms-3">{errors.password.message}</span>}
                    </div>
                    <Link to="/register" className="link ms-2">Create an account</Link>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <button type="submit" className="btn btn-dark col-4">Register</button>
                    </div>
                </form>

                </div>
            </div>
        </div>
    </>
}

export default Login;