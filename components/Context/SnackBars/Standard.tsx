import { AlertColor, Snackbar, SnackbarOrigin } from '@mui/material'
import { snackBarT } from '../config'
import React from 'react'
import { Alert } from './Alert'

type props = {
    open: boolean
    message?: string
    severity: AlertColor | undefined
    autoHide?: number
    setSnackBar: React.Dispatch<React.SetStateAction<snackBarT>>
}

const SnackBarStandard: React.FC<props> = ({
    open,
    message = '',
    severity,
    autoHide = 6000,
    setSnackBar
}) => {
    const vertical = 'top'
    const horizontal = 'center'

    const handleClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') return
        setSnackBar({
            open: false,
            message,
            severity
        })
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={autoHide}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}
export default SnackBarStandard
