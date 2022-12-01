import React from 'react'
import { InputStyle, SelectStyle, LabelStyle } from './styles'

export const Input = ({label, id, type, placeholder, register}) => {
  return (
    <div>
    <LabelStyle htmlFor={id}>{label}</LabelStyle>
    <InputStyle id={id} type={type} placeholder={placeholder} {...register}></InputStyle>
    </div>
  )
}

export const Select = ({label, id, type, placeholder,  register, options}) => {
    return (
        <div>
        <LabelStyle htmlFor={id}>{label}</LabelStyle>
        <SelectStyle id={id} type={type} {...register}>
        <option hidden>{placeholder}</option>
        {options.map((opt) => 
        <option value={opt}>{opt}</option>
        )}
        </SelectStyle>
        </div>

    )
}
