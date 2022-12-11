import * as yup from 'yup'

export const AddTechSchema = yup.object().shape({
    title: yup
    .string()
    .required('O nome é orbigatório')
    .min(3, 'O nome deve conter no minimo caracteres'),

    status: yup
    .string()
    .oneOf(['Iniciante', 'Intermediario', 'Avançado'], 'Selecione um status')
})