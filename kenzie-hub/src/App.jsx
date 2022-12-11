import React, { useState } from 'react';
import Global from './Styles/GlobalStyles'
import { BasicRoutes } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './Contexts/UserContext';
import { TechsProvider } from './Contexts/TechsContext';
import { useContext } from 'react';
import { ThemeButton } from './Components/Buttons';


export const App = () => {
  const { isDark } = useContext(UserContext)

  return (
    <div className="App">
      <ThemeButton />
      <Global isDark={isDark}/>
        <TechsProvider>
          <BasicRoutes />
        </TechsProvider>
      <ToastContainer />
    </div>
  )
}

