import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/styles'
import { Main } from '../../Components/Main/styles'
import { NavBar } from '../../Components/NavBar/styles'
import { ContainerBox } from '../../Styles/Container'
import { clearToken, clearUserId, getToken } from '../../Services/LocalStorage'
import { HomeBox, Loader, TechList, TechListCard, TechTitleBox } from './styles'
import { ButtonStyled } from '../../Components/Buttons/styles'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { useState } from 'react'
import { Modal } from '../../Components/Modal'
import { FormAddTech } from '../../Components/FormAddTech'
import { FaRegTrashAlt } from 'react-icons/fa'
import { api } from '../../Services/Api'
import { toast } from 'react-toastify'

export const HomePage = () => {
  const { setLoading } = useContext(UserContext)
  const [showModal, setShowModal] =  useState(false)
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const removeTechnology = async (techId) => {
    const token = getToken()
    try {
      setLoading(true)
      const res = await api.delete(`/users/techs/${techId}`, {
        headers: {
        authorization: `Bearer ${token}` }
      })
      toast.success(`Tenologia removida`, {theme: 'dark'})
    } catch (error) {
      toast.error(`Algo deu errado tente novamente`, {theme: 'dark'})
    } finally {
      setLoading(false)
    }
  }

  const logout = () =>{
    clearToken()
    clearUserId()
    navigate('/login')
  }
 
  return (
    <HomeBox>
      {showModal && <Modal setShowModal={setShowModal} title={'Cadastrar Tecnologia'}><FormAddTech setShowModal={setShowModal}></FormAddTech> </Modal>}
    <NavBar>
      <ContainerBox>
      <img src={Logo} alt="Logo" />
      <ButtonStyled type={'button'} btstyle={'lightgrey'} btsize={'md'} onClick={logout}>Sair</ButtonStyled>
      </ContainerBox>
    </NavBar>
    <Header>
      <ContainerBox>
      <h2>Ola, {user && user.name}</h2>
      <p>{user && user.course_module}</p>
      </ContainerBox>
    </Header>
    <Main>
      <TechTitleBox>
        <h2>Técnologias</h2>
        <button onClick={() => setShowModal(true)}>+</button>
      </TechTitleBox>
      <TechList>
        {user.techs.map((tech, i) => 
        <TechListCard key={i}>
          <p>{tech.title}</p>
          <div>
            <span>{tech.status}</span>
            <button type='button' onClick={() => removeTechnology(tech.id)}><FaRegTrashAlt /></button>
            </div>
        </TechListCard>)}
      </TechList>
    </Main>
    </HomeBox>
  )
  }
  
