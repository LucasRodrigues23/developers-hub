import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { Form } from '../../Components/Forms'
import { Input, Select } from '../../Components/Inputs'
import { Button } from '../../Components/Buttons'
import { allModules } from '../../Data/allModulesData'
import { RegisterBoxLogo } from './styles'
 
export const RegisterPage = () => {
  return (
    <>
    <RegisterBoxLogo className='register-logo-box'>
      <img src={Logo} alt="Logo" />
      <Button btstyle={'grey'} btsize={'md'} >Voltar</Button>
    </RegisterBoxLogo>
    
    <Form>
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      <Input label={'Nome'} id={'name'} type={'text'} placeholder={'Digite aqui seu nome'}/>
      <Input label={'Email'} id={'email'} type={'email'} placeholder={'Digite aqui seu email'}/>
      <Input label={'Senha'} id={'passowrd'} type={'passowrd'} placeholder={'Digite aqui sua senha'}/>
      <Input label={'Confirmar senha'} id={'confirmPassword'} type={'passowrd'} placeholder={'Digite novamente sua senha'}/>
      <Input label={'Bio'} id={'bio'} type={'text'} placeholder={'Fale sobre você'}/>
      <Input label={'Contato'} id={'contatct'} type={'text'} placeholder={'Opção de contato'}/>
      <Select label={'Selecionar modulo'} id={'userModule'} placeholder={'Selecionar'} options={allModules}/>
      <Button btstyle={'primary'} btsize={'lg'} type={'submit'}>Cadastrar</Button>
    </Form>
    </>
  )
}
