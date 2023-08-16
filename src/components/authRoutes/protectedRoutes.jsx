import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoutes = ({children, isAllow})=>{
    if(!isAllow) {
        return <Navigate to="/"/>
    }
    return children ? children : <Outlet/>
}