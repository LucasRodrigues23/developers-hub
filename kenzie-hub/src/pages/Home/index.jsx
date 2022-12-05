import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { Link } from 'react-router-dom'
import { Header } from '../../Components/Header/styles'
import { Main } from '../../Components/Main/styles'
import { NavBar } from '../../Components/NavBar/styles'
import { ContainerBox } from '../../Styles/Container'
import { clearToken, clearUserId } from '../../Services/LocalStorage'
import { HomeBox } from './styles'

export const HomePage = ({user, setUser}) => {
 

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
      <Link to='/login' onClick={() => logout()}>Sair</Link>
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
