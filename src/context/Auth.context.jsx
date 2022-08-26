import { createContext, useState } from "react"
import React from "react"
import { axiosPublicInstance } from "../config/axios"
import { toast } from "react-toastify"

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    const registerUser = async (data) => {
        try {
            const response = await axiosPublicInstance.post(
                '/auth/local/register', 
                data
                )

            const {user, jwt} = response.data
            // setting data to the localStorage
            // update state
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', JSON.stringify(jwt))



            setUser(user)
            setToken(jwt)

            console.log(response.data)
        } catch (err){
            toast.error(err.response?.data?.error?.message)
        }
        
    }

    const login = (data) => {

    }

    const logout = () => {

    }

    const value = {
        registerUser,
        login,
        logout,
        user,
        token,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 
