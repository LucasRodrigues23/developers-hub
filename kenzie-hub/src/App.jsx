import React from 'react';
import Global from './Styles/GlobalStyles'
import { Form } from './Components/Forms';
import { Input, Select } from './Components/Inputs';
import { Button } from './Components/Buttons';


export const App = () => {
  return (
    <div className="App">
      <Global />
      <Form>
        <Input label={'Email'} id={'email'} type={'email'} placeholder={'Email'} />
        <Input label={'Senha'} id={'senha'} type={'password'} placeholder={'Senha'}/>
        <Select label={"Select"} id={'select'} type={'select'} placeholder={'select'} options={['abacaxi', 'melão']} />
        <Button style={'primary'} type={'submit'} >Enviar</Button>
        <span>Ainda não possui uma conta?</span>
        <Button style={'grey'} type={'button'}>Cadastrar</Button>
      </Form>
    </div>
  );
}
