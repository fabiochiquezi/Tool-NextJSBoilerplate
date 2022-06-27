import React from 'react'
import Grid from '@mui/material/Grid'
import { formFieldsT } from 'app/Shared'
import { TextField } from '@mui/material'

const FormFields: React.FC<formFieldsT> = ({ errors, register }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="First Name"
                    error={!!errors.firstName}
                    variant="outlined"
                    fullWidth
                    margin="none"
                    {...register('firstName')}
                    defaultValue=""
                    helperText={errors.firstName && errors.firstName.message}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    label="Last Name"
                    error={!!errors.lastName}
                    variant="outlined"
                    fullWidth
                    margin="none"
                    {...register('lastName')}
                    defaultValue=""
                    helperText={errors.lastName && errors.lastName.message}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="E-mail"
                    error={!!errors.email}
                    variant="outlined"
                    fullWidth
                    margin="none"
                    {...register('email')}
                    defaultValue=""
                    helperText={errors.email && errors.email.message}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="password"
                    error={!!errors.password}
                    variant="outlined"
                    fullWidth
                    margin="none"
                    {...register('password')}
                    defaultValue=""
                    helperText={errors.password && errors.password.message}
                />
            </Grid>
        </Grid>
    )
}

export default FormFields
