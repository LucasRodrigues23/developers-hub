import React from 'react';
import Global from './Styles/GlobalStyles'
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';


export const App = () => {
  return (
    <div className="App">
      <Global />
     <RegisterPage />
    </div>
  );
}
