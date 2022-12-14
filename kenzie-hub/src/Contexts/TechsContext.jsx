import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';
import { api } from '../Services/Api';
import { getToken } from '../Services/LocalStorage';
import { UserContext } from './UserContext';


export const TechsContext = createContext({})

export const TechsProvider = ({children}) => {
    const { setLoading } = useContext(UserContext)
    const [techs, setTechs] = useState([]) 
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
  
   
    const addTech = async (formdata) => {
        const token = getToken()
        try {
          
          const res = await api.post('/users/techs', formdata, {
            headers: {
            authorization: `Bearer ${token}` }
          })
          toast.success(`Tenologia adicionada`, {theme: 'dark', autoClose: 2000})
        } catch (error) {
          toast.error(`Você já possui está tecnologia`, {theme: 'dark', autoClose: 2000})
        } finally {
          setLoading(true)
        }
    }

    const editTechStatus = async (formdata, techId) => {
    
      const token = getToken()
      try {
       
        const { data } = await api.put(`/users/techs/${techId}`, formdata, {
          headers: {
          authorization: `Bearer ${token}` }
        })
        toast.success(`Tenologia Atualizada`, {theme: 'dark', autoClose: 2000})
      } catch (error) {
        toast.error(`Ops Algo deu errado`, {theme: 'dark', autoClose: 2000})
      } finally {
        setLoading(true)
      }
    }

    const removeTechnology = async (techId) => {
        const token = getToken()
        try {
         
          const res = await api.delete(`/users/techs/${techId}`, {
            headers: {
            authorization: `Bearer ${token}` }
          })
          toast.success(`Tenologia removida`, {theme: 'dark', autoClose: 2000})
        } catch (error) {
          toast.error(`Algo deu errado tente novamente`, {theme: 'dark', autoClose: 2000})
        } finally {
          setShowModal2(false)
          setLoading(true)
        }
      }

      const editTech = (tech) => {
        setTechs(tech)
        setShowModal2(true)
      }

    return (
        <TechsContext.Provider value={{addTech, editTechStatus, editTech, techs, removeTechnology, showModal, setShowModal, showModal2, setShowModal2}}>
            {children}
        </TechsContext.Provider>
    )
}