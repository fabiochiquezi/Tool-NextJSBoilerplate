import { FC } from 'react'
import Link from 'next/link'
import { signUpT } from './types'
import { Grid } from '@mui/material'
import FormFields from './FormFields'
import { validation } from './validation'
import Avatar from '@mui/material/Avatar'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const SignUp: FC<signUpT> = ({ onSubmit, SubmitButton }) => {
    const formFns = useForm(validation)

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

                <SubmitButton />

                <Grid container justifyContent="center" className="mt-4">
                    <Grid item>
                        <Link href="/sign-in">
                            <a className="text-blue-600">
                                Already have an account? Sign in
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export { SignUp }
