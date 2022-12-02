import React from 'react'
import { FormStyle } from './styles'

export const Form = ({children}) => {
  return (
    <>
    <FormStyle>
    {children}
    </FormStyle>
    </>
  )
}
