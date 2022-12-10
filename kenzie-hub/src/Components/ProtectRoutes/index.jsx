import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'

export const ProtectRoutes = () => {

    const {user, loading} =  useContext(UserContext)
    
    if(loading) {
        return null
    } 
    return user ? <Outlet /> : <Navigate to={'/login'} />
}
