import * as yup from 'yup'

export const EditTechSchema = yup.object().shape({
    title: yup
    .string(),
    
    status: yup
    .string()
    .oneOf(['Iniciante', 'Intermediario', 'Avançado'], 'Selecione um status')
})