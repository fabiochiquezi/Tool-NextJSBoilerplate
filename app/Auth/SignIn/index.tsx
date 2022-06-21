import schema from './schema'
import * as React from 'react'
import Link from '@mui/material/Link'
import FormFields from './FormFields'
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Avatar from '@mui/material/Avatar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from '../../../firebase/auth/signIn'
import SubmitButton from '../../../components/Buttons/Submit'
import { useComponents } from '../../../components/Context/config'

export default function SignIn() {
    const [loading, setLoading] = React.useState(false)
    const validation = { resolver: yupResolver(schema) }
    const formFns = useForm(validation)
    const router = useRouter()
    const { snackBar } = useComponents()

    const onSubmit = async (dataForm: any) => {
        setLoading(true)
        const { data, message, ok } = await signIn(dataForm)

        if (ok) {
            router.push('/simple-todo/list')
            return
        }

        snackBar.setSnackBar({
            open: true,
            message,
            severity: 'error'
        })

        setLoading(false)
    }

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

                <SubmitButton
                    btnText="Sign In"
                    loading={loading}
                    className="mt-4 mb-8"
                />
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {'Dont have an account? Sign Up'}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}
