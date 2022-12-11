import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { setDarkMode } from '../../Services/LocalStorage'
import { ButtonStyled, ThemeButtonStyled } from './styles'

export const Button = ({children, type, btstyle, btsize, disabled}) => {

    return (
    <>
    <ButtonStyled type={type} btstyle={btstyle} btsize={btsize} disabled={disabled} >{children}</ButtonStyled>
    </>
         )
    }
export const ThemeButton = () => {
     const { isDark, setIsDark } = useContext(UserContext)
     

     return (
          <ThemeButtonStyled isDark={isDark} onClick={() => setIsDark(!isDark, setDarkMode())}>{isDark ? 'Light mode' : 'Dark mode'}</ThemeButtonStyled>
     )
}