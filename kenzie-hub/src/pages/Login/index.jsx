import React from 'react'
import { Input } from'../../Components/Inputs'
import { Button } from'../../Components/Buttons'
import Logo from'../../Assets/Logo.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStyle } from '../../Components/Forms/styles'
import { LoginSchema } from './loginSchema'
import { Link } from 'react-router-dom'
import { LogoLogin } from './styles';
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { InputPassword } from '../../Components/InputPassword'

export const LoginPage = () => {
  
    const { register, handleSubmit, formState: {errors}, reset} = useForm({
      mode: 'onBlur',
      defaultValues: {
        email: '',
        password: '',
      },
      resolver: yupResolver(LoginSchema)
    })

    const { userLogin, loading } = useContext(UserContext)

    const submit = (data) => {
      userLogin(data)
      reset()
    }

  return (
    <>
      <LogoLogin src={Logo} alt='Logo'/>
      <FormStyle onSubmit={handleSubmit(submit)} >
        <h2>Login</h2>
        <Input label={'Email'} id={'email'} type={'text'} placeholder={'Email'} register={register('email')} disabled={loading} />
        
        
        <InputPassword label={'Senha'} id={'senha'} type={'password'} placeholder={'Senha'} register={register('password')} disabled={loading}/>
       
       
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
