import * as yup from 'yup'

export default yup.object({
    email: yup
        .string()
        .required('* E-mail is required')
        .email('* Must be a valid email e-mail'),
    password: yup.string().required('Password is required')
})
