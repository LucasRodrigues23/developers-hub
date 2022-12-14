import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../Components/Header/styles'
import { Main } from '../../Components/Main/styles'
import { NavBar } from '../../Components/NavBar/styles'
import { ContainerBox } from '../../Styles/Container'
import { clearToken, clearUserId } from '../../Services/LocalStorage'
import { HomeBox, TechList, TechListCard, TechTitleBox } from './styles'
import { ButtonStyled } from '../../Components/Buttons/styles'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { Modal } from '../../Components/Modal'
import { FormAddTech } from '../../Components/FormAddTech'
import { TechsContext } from '../../Contexts/TechsContext'
import { FormEditTech } from '../../Components/FormEditTech'

export const HomePage = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const { techs, editTech, showModal, setShowModal, showModal2, setShowModal2 } = useContext(TechsContext)


  const logout = () =>{
    clearToken()
    clearUserId()
    navigate('/login')
  }


  return (
    <HomeBox>
      {showModal && <Modal setShowModal={setShowModal} title={'Cadastrar Tecnologia'}><FormAddTech setShowModal={setShowModal}></FormAddTech> </Modal>}
      {showModal2 && <Modal setShowModal={setShowModal2} title={'Editar Tecnologia'}><FormEditTech tech={techs} setShowModal2={setShowModal2}></FormEditTech> </Modal>}
    <NavBar>
      <ContainerBox>
      <img src={Logo} alt='Logo' />
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
      {user.techs.length > 0 ? <TechList>
        {user.techs.map((tech, i) => 
        <TechListCard key={i} onClick={() => editTech(tech)}>
          <p>{tech.title}</p>
            <span>{tech.status}</span>
        </TechListCard>)}
      </TechList> : <h2>Você ainda não possui nenhuma tecnologia adicionada :(</h2>}
      
    </Main>
    </HomeBox>
  )
        
  }
  
