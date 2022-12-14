import { useState } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { clearToken, clearUserId, getDarkMode, getToken, setDarkMode, setToken, setUserId }  from '../Services/LocalStorage/index'
import { api } from'../Services/Api'
import { useEffect } from "react"

export const UserContext = createContext({})



export const  UserProvider = ({children}) =>{

const [loading, setLoading] = useState(true)
const [user, setUser] = useState(null)
const navigate = useNavigate()
const [isDark, setIsDark] = useState(getDarkMode() === 'dark' ? true : false)

useEffect(() => {
    const authUser = async () => {
      const token = getToken()

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const { data } = await api.get('/profile', {
          headers: {
          authorization: `Bearer ${token}` }
        })
        setUser(data)
      } catch (error) {
        clearToken()
        clearUserId()
        navigate('/login')

      } finally {
        setLoading(false)
      }
      
    }
    authUser()

}, [loading]) 
const userLogin = async (data) => {

    try {
      setLoading(true)
      const res = await api.post('sessions', data)
      toast.success(`Olá ${res.data.user.name}`, {theme: 'dark', autoClose: 2000})
      setToken(res.data.token)
      setUserId(res.data.user.id)
      setUser(res.data.user)
      navigate('/home')
    

    } catch (error) {
      toast.error('Algo deu errado, tente novamente', {theme: 'dark', autoClose: 2000})
      
    } finally {
      setLoading(false)
    }
  }

  const userRegister = async (data) => {
    try {
      setLoading(true)
      const res = await api.post('/users', data)

      toast.success('Cadastro realizado com Sucesso!', {theme: 'dark', autoClose: 2000})
      navigate('/login')
      
    } catch (error) {
      toast.error(error.response.data.message , {theme: 'dark', autoClose: 2000})
    } finally {
      setLoading(false)
    }
  }
  

    return (
        <UserContext.Provider value={{userLogin, userRegister, loading, setLoading, user, isDark, setIsDark}}>
            {children}
        </UserContext.Provider>
    )

    
}