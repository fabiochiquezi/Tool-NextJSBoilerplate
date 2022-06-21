import { Button, CircularProgress } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'

type props = {
    btnText: string
    loading: boolean
    className?: string
}

const SubmitButton: React.FC<props> = ({ btnText, loading, className }) => {
    return (
        <Button
            type="submit"
            variant="contained"
            size="small"
            className={`${className} bg-blue-600 h-10 w-28`}
            endIcon={!loading ? <SendIcon /> : ''}
            disabled={!!loading}
        >
            {!loading ? (
                btnText
            ) : (
                <CircularProgress size={20} color="inherit" />
            )}
        </Button>
    )
}

export default SubmitButton
