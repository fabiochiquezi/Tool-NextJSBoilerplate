import { FC, ReactElement } from 'react'
import schema from './schema'
import Link from '@mui/material/Link'
import FormFields from './FormFields'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar, Typography } from '@mui/material'

type props = {
    onSubmit: (dataForm: any) => Promise<void>
    loading: boolean
    SubmitButton: FC
}

export const SignIn: FC<props> = ({ onSubmit, loading, SubmitButton }) => {
    const validation = { resolver: yupResolver(schema) }
    const formFns = useForm(validation)

    return (
        <Container
            component="main"
            maxWidth="xs"
            className="mt-16 flex flex-col items-center"
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />

            <Typography component="h1" variant="h5" className="mb-4">
                Sign in
            </Typography>

            <form
                onSubmit={formFns.handleSubmit(onSubmit)}
                className="flex flex-col items-center"
            >
                <FormFields
                    errors={formFns.formState.errors}
                    register={formFns.register}
                />

                <SubmitButton />

                <Link href="#" variant="body2">
                    {'Dont have an account? Sign Up'}
                </Link>
            </form>
        </Container>
    )
}
