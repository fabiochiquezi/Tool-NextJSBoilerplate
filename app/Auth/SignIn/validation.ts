import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup
        .string()
        .required('* E-mail is required')
        .email('* Must be a valid email e-mail'),
    password: yup.string().required('Password is required')
})

export const validation = { resolver: yupResolver(schema) }
