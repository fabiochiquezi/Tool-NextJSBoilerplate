import React from 'react'
import { formFieldsT } from 'app/Shared'
import { TextField } from '@mui/material'

const FormFields: React.FC<formFieldsT> = ({ errors, register }) => (
    <TextField
        label="Content"
        error={!!errors.content}
        variant="outlined"
        fullWidth
        className="mb-6 max-w-sm"
        margin="normal"
        {...register('content')}
        defaultValue=""
        helperText={errors.content && errors.content.message}
    />
)

export default FormFields
