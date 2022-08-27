import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth.context'
import {Navigate} from 'react-router-dom'

function PrivateRoute({children}) {
    // Logic
    const {user} = useContext(AuthContext)
    const loadedComp = user ? children: <Navigate to='/login'/>

  return <div>{loadedComp}</div>
}

export default PrivateRoute