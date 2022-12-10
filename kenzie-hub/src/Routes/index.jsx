import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { RegisterPage } from '../pages/Register'
import { LoginPage } from '../pages/Login'
import { ProtectRoutes } from '../Components/ProtectRoutes'

export const BasicRoutes = () => {
  return (
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route path='home' element={<HomePage />} />
        </Route>
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path="*" element={<Navigate to='home' />} />
      </Routes>
  )
  
}
