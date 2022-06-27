import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    content: yup.string().required()
})

export const validation = { resolver: yupResolver(schema) }
