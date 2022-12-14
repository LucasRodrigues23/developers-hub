import React, { useState } from 'react';
import Global from './Styles/GlobalStyles'
import { BasicRoutes } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './Contexts/UserContext';
import { TechsProvider } from './Contexts/TechsContext';
import { useContext } from 'react';
import { ThemeButton } from './Components/Buttons';
import { LoadingAnimation, LoadingBg } from './Styles/LoadingBg';


export const App = () => {
  const { isDark, loading} = useContext(UserContext)

  if (loading) {
    return (
      <div className='App'>
        <Global isDark={isDark}/>
        <LoadingBg>
          <LoadingAnimation>
          </LoadingAnimation>
        </LoadingBg>
        </div>
    )
  } else {
    return (
    <div className='App'>
      <Global isDark={isDark}/>
        <TechsProvider>
          <ThemeButton />
          <BasicRoutes />
        </TechsProvider>
      <ToastContainer />
    </div>
  )
  }
  
}

