import * as yup from 'yup'

export default yup.object({
    content: yup.string().required()
})
