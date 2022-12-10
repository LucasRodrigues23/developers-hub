import React from 'react'
import { ButtonStyled, AncorStyled } from './styles'

export const Button = ({children, type, btstyle, btsize, disabled}) => {

    return (
    <>
    <ButtonStyled type={type} btstyle={btstyle} btsize={btsize} disabled={disabled} >{children}</ButtonStyled>
    </>
         )
    }
