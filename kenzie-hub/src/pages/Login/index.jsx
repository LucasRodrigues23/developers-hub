import React from 'react'
import { Form } from'../../Components/Forms'
import { Input } from'../../Components/Inputs'
import { Button } from'../../Components/Buttons'
import Logo from'../../Assets/Logo.svg'

export const LoginPage = () => {
  return (
    <>
      <img src={Logo} alt="Logo"/>  
      <Form>
        <Input label={'Email'} id={'email'} type={'email'} placeholder={'Email'} />
        <Input label={'Senha'} id={'senha'} type={'password'} placeholder={'Senha'}/>
        <Button style={'primary'} type={'submit'} >Enviar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button btstyle={'grey'} btsize={'lg'} type={'button'}>Cadastrar-se</Button>
      </Form>
    </>
  )
}
