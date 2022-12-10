import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../Services/Api";
import { getToken } from "../Services/LocalStorage";
import { UserContext } from "./UserContext";


export const TechsContext = createContext({})

export const TechsProvider = ({children}) => {
    const { setLoading } = useContext(UserContext)
    const [techs, setTechs] = useState(null) 
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    const addTech = async (formdata) => {
        const token = getToken()
        try {
          setLoading(true)
          const res = await api.post('/users/techs', formdata, {
            headers: {
            authorization: `Bearer ${token}` }
          })
          toast.success(`Tenologia adicionada`, {theme: 'dark'})
        } catch (error) {
          toast.error(`Você já possui está tecnologia`, {theme: 'dark'})
        } 
    }

    const editTechStatus = async (formdata, techId) => {
    
      const token = getToken()
      try {
        setLoading(true)
        const { data } = await api.put(`/users/techs/${techId}`, formdata, {
          headers: {
          authorization: `Bearer ${token}` }
        })
        toast.success(`Tenologia Atualizada`, {theme: 'dark'})
      } catch (error) {
        toast.error(`Ops Algo deu errado`, {theme: 'dark'})
      }
    }

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
          setShowModal2(false)
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