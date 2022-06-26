import React from 'react'
import { TextField } from '@mui/material'
import { formFieldsT } from 'app/Shared/Types/general'

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
