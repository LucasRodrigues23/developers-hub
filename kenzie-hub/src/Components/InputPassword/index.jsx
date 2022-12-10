import React from 'react'
import { useState } from 'react'
import { LabelStyle } from '../Inputs/styles'
import { InputPwd, PasswordBox, PwdButton } from './styles'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const InputPassword = ({disabled, label, id, placeholder, register}) => {

    const [visible, setVisible] = useState(false)

  return (

    <>
       <LabelStyle htmlFor={id}>{label}</LabelStyle> 
       <PasswordBox>
       <InputPwd id={id} type={visible ? 'text': 'password'} placeholder={placeholder} {...register} disabled={disabled}></InputPwd>
       <PwdButton type='button' onClick={() => setVisible(!visible)}>{visible ? <FaEyeSlash />: <FaEye />}</PwdButton> 
       </PasswordBox> 
    </>

  )}  
