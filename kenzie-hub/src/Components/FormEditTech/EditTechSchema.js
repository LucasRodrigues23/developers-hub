import * as yup from 'yup'

export const EditTechSchema = yup.object().shape({
    title: yup
    .string()
    .required('O nome é orbigatório')
    .min(3, 'O nome deve conter mais de 3 caracteres'),

    status: yup
    .string()
    .required('O status é obrigatório')  
})