import React from 'react'
import { Input } from'../../Components/Inputs'
import { Button} from'../../Components/Buttons'
import Logo from'../../Assets/Logo.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStyle } from '../../Components/Forms/styles'
import { useState } from 'react'
import { LoginSchema } from './loginSchema'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../Services/Api'
import { setToken }  from '../../Services/LocalStorage'
import { LogoLogin } from "./styles";

export const LoginPage = ({setUser}) => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
      mode: 'onBlur',
      defaultValues: {
        email: '',
        password: '',
      },
      resolver: yupResolver(LoginSchema)
    })

    const userLogin = async (formData) => {

      try {
        setLoading(true)
        const res = await api.post('sessions', formData)
        toast.success(`Olá ${res.data.user.name}`, {theme: 'dark'})
        setToken(res.data.token)
        setUser(res.data.user)
        navigate('/home')
      

      } catch (error) {
        toast.error('Algo deu errado, tente novamente', {theme: 'dark'})
     
      } finally {
        setLoading(false)
      }
    }

    const submit = async (data) => {
      await userLogin(data)
      reset()
    } 


  return (
    <>
      <LogoLogin src={Logo} alt="Logo"/>  
      <FormStyle onSubmit={handleSubmit(submit)} >
        <h2>Login</h2>

        <Input label={'Email'} id={'email'} type={'text'} placeholder={'Email'} register={register('email')} disabled={loading} />
        
        
        <Input label={'Senha'} id={'senha'} type={'password'} placeholder={'Senha'} register={register('password')} disabled={loading}/>
       
       
       {}
        <Button btstyle={'primary'} btsize={'lg'} type={'submit'} disabled={loading} >
          {loading ? 'Entrando' : 'Entrar'}
          </Button>
        
        <span>Ainda não possui uma conta?</span>

        <Link to='/register'>Cadastrar-se</Link>
      </FormStyle>
    </>
  )
}
