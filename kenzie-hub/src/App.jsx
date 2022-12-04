import React, { useEffect, useState } from 'react';
import Global from './Styles/GlobalStyles'
import { api } from './Services/Api'
import { setToken } from './Services/LocalStorage'
import { BasicRoutes } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Global />
      <BasicRoutes setUser={setUser} user={user}/>
      <ToastContainer />
    </div>
  );
}
