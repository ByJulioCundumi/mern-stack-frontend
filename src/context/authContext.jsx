import { createContext, useState, useEffect } from "react";
import { postLogin, postRegister, postLogout, getVerifyToken } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext()
//
const AuthProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loginMessage, setLoginMessage] = useState(null)
    const [registerMessage, setRegisterMessage] = useState(null)
    const [loading, setLoading] = useState(true)
    //
    const loginRequest = async (data)=>{
        try {
            const result = await postLogin(data)
            if(!!result.email){
                console.log(result)
                setIsAuthenticated(true)
                setUser(result)
                setLoginMessage(null)
                setLoading(false)
            } else {
                setLoginMessage(result)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    //
    const logoutRequest = async ()=>{
        postLogout()
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
    }
    //
    const registerRequest = async (data)=>{
        try {
            const result = await postRegister(data)
            if(!!result.email){
                setIsAuthenticated(true)
                setUser(result)
                console.log(result)
                setRegisterMessage(null)
                setLoading(false)
            } else{
                setRegisterMessage(result)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    //
    useEffect(()=>{

        const validateToken = async ()=>{
            const cookies = Cookies.get()
            if(cookies.token){
                const result = await getVerifyToken()
                if(!!result.email){
                    setIsAuthenticated(true)
                    setUser(result)
                    setLoading(false)
                } else{
                    setIsAuthenticated(false)
                    setLoading(false)
                }
            } else{
                setIsAuthenticated(false)
                setLoading(false)
            }
        }
        validateToken()

    },[])
    //
    return <AuthContext.Provider value={{user, loading, isAuthenticated, loginMessage, registerMessage, loginRequest, logoutRequest, registerRequest}}>
            {children}
    </AuthContext.Provider>
}

export default AuthProvider;