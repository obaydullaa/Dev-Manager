import { createContext, useState } from "react"
import React from "react"
import { axiosPublicInstance } from "../config/axios"

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
            console.log(response.data)
        } catch (err){
            console.log(err.response)
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
