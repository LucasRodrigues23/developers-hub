import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechsContext } from '../../Contexts/TechsContext'
import { ButtonStyled } from '../Buttons/styles'
import { FormTechStyled } from '../FormAddTech/styles'
import { Input, Select } from '../Inputs'
import { EditTechSchema } from './EditTechSchema'
import { DoubleButtonBox } from './styles'

export const FormEditTech = ({tech}) => {
    const { editTechStatus, removeTechnology, setShowModal2 } = useContext(TechsContext)

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
      mode: 'onBlur',
      defaultValues: {
        title: tech.title,
      },
      resolver: yupResolver(EditTechSchema)
    })
  
  
    const submit = (data) => {
      const status = { 'status': `${data.status}`}
      editTechStatus(status, tech.id)
      reset()
      setShowModal2(false)
    }
  
    return (
      <>
      <FormTechStyled onSubmit={handleSubmit(submit)}>
        <Input label={'Nome'} id={'title'} type={'text'} disabled={true} register={register('title')} />
        {errors.name && <p>{errors.name.message}</p>}
  
        <Select label={'Selecionar status'} id={'status'} placeholder ={'selecionar'} options={['Iniciante', 'Intermediario', 'Avançado']} register={register('status')}/>
        {errors.status && <p>{errors.status.message}</p>}
        <DoubleButtonBox>
            <div>
                <ButtonStyled type={'submit'} btsize={'lg'} btstyle={'primary'} >Atualizar</ButtonStyled>
            </div>
            <div>
                <ButtonStyled type={'button'} btsize={'lg'} btstyle={'grey'} onClick={() => removeTechnology(tech.id)}>Excluir</ButtonStyled>
            </div>
            </DoubleButtonBox>
        
        
      </FormTechStyled>
      </>
    )
}
