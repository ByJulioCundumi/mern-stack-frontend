import { createContext, useState } from "react";
import { postLogin, postRegister, postLogout } from "../api/auth";

export const AuthContext = createContext()
//
const AuthProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loginMessage, setLoginMessage] = useState(null)
    const [registerMessage, setRegisterMessage] = useState(null)
    //
    const loginRequest = async (data)=>{
        try {
            const result = await postLogin(data)
            console.log(result)
            if(!!result.email){
                setIsAuthenticated(true)
            } else {
                setLoginMessage(result)
            }
        } catch (error) {
            console.log(error)
        }
    }
    //
    const logoutRequest = async ()=>{
        try {
            const result = await postLogout()
            setIsAuthenticated(false)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    //
    const registerRequest = async (data)=>{
        try {
            const result = await postRegister(data)
            if(!!result.email){
                setIsAuthenticated(true)
                setUser(result)
                console.log(result)
            } else{
                setRegisterMessage(result)
            }
        } catch (error) {
            console.log(error)
        }
    }
    //
    return <AuthContext.Provider value={{user, isAuthenticated, loginMessage, registerMessage, loginRequest, logoutRequest, registerRequest}}>
            {children}
    </AuthContext.Provider>
}

export default AuthProvider;