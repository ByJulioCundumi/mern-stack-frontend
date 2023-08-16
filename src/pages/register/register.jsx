import "./register.css";
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { postRegister } from "../../api/auth";

function Register(){
    const {register, handleSubmit, formState: {errors}, watch } = useForm();

    const onSubmit = handleSubmit( async (data)=>{
        const result = await postRegister(data)
        console.log(result)
    })

    return <>
        <div className="container">
            <div className="row justify-content-center align-items-center register mt-5">
                <div className="col-12 col-md-6">

                <form onSubmit={onSubmit} className="shadow px-5 py-3 rounded">
                    <h1 className="m-3 text-center">Registro</h1>
                    <div className="form-floating mt-3">
                        <input type="text" id="username" className="form-control" placeholder="" {... register("username", {
                            required: {
                                value: true,
                                message: "Please provide an username"
                            },
                            minLength: {
                                value: 4,
                                message: "The username provided is to short"
                            },
                            maxLength: {
                                value: 30,
                                message: "The username is too long"
                            }
                        })}/>
                        <label htmlFor="username">Username</label>
                        {errors.username && <span className="text-danger ms-3">{errors.username.message}</span>}
                    </div>
                    <div className="form-floating mt-3">
                        <input type="email" id="email" className="form-control" placeholder="" {... register("email", {
                            required: {
                                value: true,
                                message: "Please provide an email"
                            },
                            minLength: {
                                value: 12,
                                message: "The email provided is not valid"
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
                                value: 3,
                                message: "The password provided is to short"
                            },
                            maxLength: {
                                value: 20,
                                message: "The password is too long"
                            }
                        })}/>
                        <label htmlFor="password">Password</label>
                        {errors.password && <span className="text-danger ms-3">{errors.password.message}</span>}
                    </div>
                    <div className="form-floating mt-3">
                        <input type="password" id="confpassword" className="form-control" placeholder="" {... register("confpassword", {
                            required: {
                                value: true,
                                message: "Please provide a password"
                            },
                            validate: valPass => valPass === watch("password") || "Password doesn't match"
                        })}/>
                        <label htmlFor="confpassword">Confirm password</label>
                        {errors.confpassword && <span className="text-danger ms-3">{errors.confpassword.message}</span>}
                    </div>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <button type="submit" className="btn btn-dark col-4">Register</button>
                    </div>
                    <Link to="/login" className="link">Login</Link>
                </form>

                </div>
            </div>
        </div>
    </>
}

export default Register