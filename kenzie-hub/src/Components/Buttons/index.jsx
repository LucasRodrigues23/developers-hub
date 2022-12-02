import React from 'react'
import { ButtonPrimary, ButtonGrey } from './styles'

export const Button = ({children, type, btstyle}) => {
    if (btstyle === 'primary') {
         return (
    <>
    <ButtonPrimary type={type}>{children}</ButtonPrimary>
    </>
  )
    }else  {
        return (
            <>
            <ButtonGrey type={type}>{children}</ButtonGrey>
            </>
          )  
    }
 
}
