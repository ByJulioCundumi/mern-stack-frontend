import "./nav.css"
import {NavLink, Link} from "react-router-dom"

function NavBar(){
    return <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <div class="container">
                <a class="navbar-brand" href="#">Tasks Website</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control" type="text" placeholder="Search" />
                        <button class="btn btn-outline-success my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </div>
        </nav>
        
        <div className="offcanvas offcanvas-start" tabindex="-1" id="menu">
                <div className="offcanvas-header">
                    <h5 className="offcancas-title">Tasks Website</h5>
                    <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    
                </div>
            </div>
    </>
}

export default NavBar;