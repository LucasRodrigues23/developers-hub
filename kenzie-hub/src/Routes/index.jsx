import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { RegisterPage } from '../pages/Register'
import { LoginPage } from '../pages/Login'

export const BasicRoutes = ({setUser, user}) => {
  return (
      <Routes>
        <Route path='home' element={<HomePage  setUser={setUser} user={user}/>} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage setUser={setUser}/>} />
        <Route path="*" element={<Navigate to='home' />} />
      </Routes>
  )
  
}
