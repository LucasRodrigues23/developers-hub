import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { Input, Select } from '../../Components/Inputs'
import { Button } from '../../Components/Buttons'
import { allModules } from '../../Data/allModulesData'
import { RegisterBoxLogo } from './styles'
import { RegisterSchema } from './registerSchema'
import { FormStyle } from '../../Components/Forms/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from'react-router-dom'
import { InputPassword } from '../../Components/InputPassword'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
export const RegisterPage = () => {

  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      bio: '',
      contact: '',
    },
    resolver: yupResolver(RegisterSchema)
  })

  const {userRegister, loading} = useContext(UserContext)

  const submit = (data) => {
    userRegister(data)
    reset()
  }

  return (
    <>
    <RegisterBoxLogo className='register-logo-box'>
      <img src={Logo} alt="Logo" />
      <Link to='/login'>Voltar</Link>
    </RegisterBoxLogo>
    
    <FormStyle onSubmit={handleSubmit(submit)}>
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      <Input disabled={loading} label={'Nome'} id={'name'} type={'text'} placeholder={'Digite aqui seu nome'} register={register('name')}/>
      {errors.name && <p>{errors.name.message}</p>}

      <Input disabled={loading} label={'Email'} id={'email'} type={'email'} placeholder={'Digite aqui seu email'} register={register('email')}/>
      {errors.email && <p>{errors.email.message}</p>}
      
      <InputPassword disabled={loading} label={'Senha'} id={'passowrd'} type={'password'} placeholder={'Digite aqui sua senha'} register={register('password')}/>
      {errors.password && <p>{errors.password.message}</p>}
      
      <InputPassword disabled={loading} label={'Confirmar senha'} id={'confirmPassword'} type={'password'} placeholder={'Digite novamente sua senha'} register={register('confirmPassword')}/>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      
      <Input disabled={loading} label={'Bio'} id={'bio'} type={'text'} placeholder={'Fale sobre você'} register={register('bio')}/>
      {errors.email && <p>{errors.email.message}</p>}
      
      <Input disabled={loading} label={'Contato'} id={'contact'} type={'text'} placeholder={'Opção de contato'} register={register('contact')}/>
      {errors.contact && <p>{errors.contact.message}</p>}
      
      <Select label={'Selecionar modulo'} id={'course_module'} placeholder={'Selecionar'} options={allModules} register={register('course_module')}/>
      {errors.coyse_modeule && <p>{errors.coyse_modeule.message}</p>}
      
      <Button btstyle={'primary'} btsize={'lg'} type={'submit'} disabled={loading}>{loading ? 'Cadastrando' : 'Cadastrar'}</Button>
    </FormStyle>
    </>
  )
}
