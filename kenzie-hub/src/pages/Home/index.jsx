import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/styles'
import { Main } from '../../Components/Main/styles'
import { NavBar } from '../../Components/NavBar/styles'
import { ContainerBox } from '../../Styles/Container'
import { clearToken, clearUserId, getToken } from '../../Services/LocalStorage'
import { HomeBox } from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../Services/Api'
import { Button } from '../../Components/Buttons'

export const HomePage = () => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const header = {
      headers: {
        'Authorization': 'Bearer ' + getToken()
      }
    }

    const getUserProfile = async () => {
      try {

         const res = await api.get('/profile', header)
      console.log(res.data);
        setUser(res.data)
      } catch (error) {
        navigate('/login')
      }
     
    }
    getUserProfile()

  }, [])
  const logout = () =>{

    clearToken()
    clearUserId()
    setUser(null)
  }
  return (
    <HomeBox>
    <NavBar>
      <ContainerBox>
      <img src={Logo} alt="Logo" />
      <Button type={'button'} btstyle={'grey'} btsize={'md'}onClick={() => logout()}>Sair</Button>
      </ContainerBox>
    </NavBar>
    <Header>
      <ContainerBox>
      <h2>Ola, {user && user.name}</h2>
      <p>{user && user.course_module}</p>
      </ContainerBox>
    </Header>
    <Main>
      <h2>Que pena! Estamos em desenvolvimento :(</h2>
      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
    </Main>
    </HomeBox>
  )
}
