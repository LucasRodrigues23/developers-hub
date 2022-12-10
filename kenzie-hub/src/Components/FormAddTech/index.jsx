import React, { useContext } from 'react'
import { Input } from '../Inputs'
import { Select } from '../Inputs'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddTechSchema } from './AddTechSchema'
import { FormTechStyled } from './styles'
import { ButtonStyled } from '../Buttons/styles'
import { TechsContext } from '../../Contexts/TechsContext'

export const FormAddTech = () => {
  const { addTech, setShowModal } = useContext(TechsContext)

  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      status: 'selecionar',
    },
    resolver: yupResolver(AddTechSchema)
  })


  const submit = (data) => {
    addTech(data)
    reset()
    setShowModal(false)
  }

  return (
    <>
    <FormTechStyled onSubmit={handleSubmit(submit)}>
      <Input label={'Nome'} id={'title'} type={'text'} placeholder={'Tecnologia'} register={register('title')} />
      {errors.name && <p>{errors.name.message}</p>}

      <Select label={'Selecionar status'} id={'status'} placeholder ={'selecionar'} options={['Iniciante', 'Intermediario', 'Avançado']} register={register('status')}/>
      {errors.status && <p>{errors.status.message}</p>}

      <ButtonStyled type={'submit'} btsize={'lg'} btstyle={'primary'}>Cadastrar Tecnologia</ButtonStyled>
    </FormTechStyled>
    </>
  )
}
