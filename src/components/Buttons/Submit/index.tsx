import { Button, CircularProgress } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'

type props = {
    btnText: string
    loading: boolean
}

const SubmitButton: React.FC<props> = ({ btnText, loading }) => {
    return (
        <Button
            type="submit"
            variant="contained"
            size="small"
            className="bg-blue-600 h-10 w-24"
            endIcon={!loading ? <SendIcon /> : ''}
            disabled={!!loading}
        >
            {!loading ? (
                'Sign In'
            ) : (
                <CircularProgress size={20} color="inherit" />
            )}
        </Button>
    )
}

export default SubmitButton
