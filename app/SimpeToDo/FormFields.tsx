import { FieldValues, UseFormRegister } from 'react-hook-form'
import { TextField } from '@mui/material'
import React from 'react'

type props = {
    register: UseFormRegister<FieldValues>
    errors: { [x: string]: any }
}

const FormFields: React.FC<props> = ({ errors, register }) => {
    return (
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
}

export default FormFields
