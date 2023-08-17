import {Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"

export const ProtectedRoutes = ()=>{
    const {isAuthenticated, loading} = useContext(AuthContext)

    if(loading) return 
    <div class="spinner-border mt-5 text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>;
    //
    if(!isAuthenticated && !loading) {
        return <Navigate to="/login"/>
    }
    return <Outlet/>
}
