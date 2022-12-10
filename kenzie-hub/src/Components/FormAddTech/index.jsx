import React, { useContext } from 'react'
import { Input } from '../Inputs'
import { Select } from '../Inputs'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AddTechSchema } from './AddTechSchema'
import { FormTechStyled } from './styles'
import { ButtonStyled } from '../Buttons/styles'
import { getToken } from '../../Services/LocalStorage'
import { api } from '../../Services/Api'
import { toast } from 'react-toastify'
import { UserContext } from '../../Contexts/UserContext'

export const FormAddTech = ({setShowModal}) => {
  const { setLoading } = useContext(UserContext)
  const { register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      status: 'selecionar',
    },
    resolver: yupResolver(AddTechSchema)
  })

  const AddTech = async (formdata) => {
      const token = getToken()
      try {
        setLoading(true)
        const { data } = await api.post('/users/techs', formdata, {
          headers: {
          authorization: `Bearer ${token}` }
        })
        toast.success(`Tenologia adicionada`, {theme: 'dark'})
      } catch (error) {
        toast.error(`Você já possui está tecnologia`, {theme: 'dark'})
      } finally {
        setLoading(false)
      }
  }

  const submit = (data) => {
    AddTech(data)
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
