import React from 'react'
import { InputStyle, SelectStyle, LabelStyle, InputBox } from './styles'

export const Input = ({label, id, type, placeholder, register, disabled}) => {
  return (
    <InputBox>
    <LabelStyle htmlFor={id}>{label}</LabelStyle>
    <InputStyle id={id} type={type} placeholder={placeholder} {...register} disabled={disabled}></InputStyle>
    </InputBox>
  )
}

export const Select = ({label, id, placeholder,  register, options}) => {
    return (
        <InputBox>
        <LabelStyle htmlFor={id}>{label}</LabelStyle>
        <SelectStyle id={id} {...register}>
        <option hidden>{placeholder}</option>
        {options.map((opt, i) => 
        <option key={i} value={opt}>{opt}</option>
        )}
        </SelectStyle>
        </InputBox>

    )
}
