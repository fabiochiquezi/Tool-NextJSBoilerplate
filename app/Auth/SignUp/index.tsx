import schema from './schema'
import * as React from 'react'
import FormFields from './FormFields'
import ButtonSignIn from './ButtonSignIn'
import Avatar from '@mui/material/Avatar'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUp } from '../../../firebase/auth/signUp'
import SubmitButton from '../../../components/Buttons/Submit'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function SignUp() {
    const validation = { resolver: yupResolver(schema) }
    const formFns = useForm(validation)
    const [loading, setLoading] = React.useState(false)

    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            const newUser = await signUp(data)
            console.log(newUser)
        } catch (e: any) {
            console.log(e, 'bbbbbbbbbbbbbbbbbbb')
        }
        setLoading(false)
    }

    return (
        <Container component="main" maxWidth="xs" className="mt-16">
            <form
                onSubmit={formFns.handleSubmit(onSubmit)}
                className="flex flex-col items-center"
            >
                <Avatar sx={{ mb: 3, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <FormFields
                    errors={formFns.formState.errors}
                    register={formFns.register}
                />

                <SubmitButton
                    btnText="Sign Up"
                    loading={loading}
                    className="mt-4"
                />
                <ButtonSignIn />
            </form>
        </Container>
    )
}
