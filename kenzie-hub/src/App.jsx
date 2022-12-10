import React, { useState } from 'react';
import Global from './Styles/GlobalStyles'
import { BasicRoutes } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, UserProvider } from './Contexts/UserContext';
import { TechsProvider } from './Contexts/TechsContext';


export const App = () => {

  return (
    <div className="App">
      <Global />
      <UserProvider>
        <TechsProvider>
          <BasicRoutes />
        </TechsProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  )
}

