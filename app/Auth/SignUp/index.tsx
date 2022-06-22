import schema from './schema'
import * as React from 'react'
import FormFields from './FormFields'
import { useRouter } from 'next/router'
import ButtonSignIn from './ButtonSignIn'
import Avatar from '@mui/material/Avatar'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from '../../../firebase/auth/signIn'
import { signUp } from '../../../firebase/auth/signUp'
import SubmitButton from '../../../components/Buttons/Submit'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useComponents } from '../../../components/Context/config'

export default function SignUp() {
    const [loading, setLoading] = React.useState(false)
    const validation = { resolver: yupResolver(schema) }
    const { snackBar } = useComponents()
    const formFns = useForm(validation)
    const router = useRouter()

    const onSubmit = async (dataForm: any) => {
        try {
            setLoading(true)
            const newUser = await signUp(dataForm)
            if (!newUser.ok) throw new Error(newUser.message)

            const auth = await signIn(dataForm)
            if (!auth.ok) throw new Error(auth.message)

            router.push('/simple-todo/list')
        } catch (e: any) {
            snackBar.setSnackBar({
                open: true,
                message: e.message,
                severity: 'error'
            })
            setLoading(false)
        }
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
