import "./nav.css"
import {NavLink, Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function NavBar(){
    const {isAuthenticated, logoutRequest} = useContext(AuthContext)

    const logout = ()=>{
        logoutRequest()
    }

    return <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <div class="container">
                <a class="navbar-brand" href="#">Tasks Website</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end">
                    {!isAuthenticated ? 
                    <ul class="navbar-nav">
                    <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                    </ul>  
                    :
                    <ul class="navbar-nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                        <li className="nav-item"><Link to="/tasks" className="nav-link">Tasks</Link></li>
                        <li className="nav-item"><Link to="/post-task" className="nav-link">Add Task</Link></li>
                        <li className="nav-item"><Link onClick={logout} className="nav-link text-primary">Logout</Link></li>
                    </ul>
                }
                </div>
          </div>
        </nav>
        
        <div className="offcanvas offcanvas-start" tabindex="-1" id="menu">
                <div className="offcanvas-header">
                    <h5 className="offcancas-title">Tasks Website</h5>
                    <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column p-5">
                {!isAuthenticated ? 
                    <ul class="navbar-nav">
                    <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                    </ul>  
                    :
                    <ul class="navbar-nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                        <li className="nav-item"><Link to="/tasks" className="nav-link">Tasks</Link></li>
                        <li className="nav-item"><Link to="/post-task" className="nav-link">Add Task</Link></li>
                        <li className="nav-item"><Link onClick={logout} className="nav-link text-primary">Logout</Link></li>
                    </ul>
                }
                </div>
            </div>
    </>
}

export default NavBar;