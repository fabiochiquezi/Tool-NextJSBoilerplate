import { Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ButtonSignIn: React.FC = () => (
    <Grid container justifyContent="center" className="mt-4">
        <Grid item>
            <Link href="/sign-in">
                <a className="text-blue-600">
                    Already have an account? Sign in
                </a>
            </Link>
        </Grid>
    </Grid>
)

export default ButtonSignIn
