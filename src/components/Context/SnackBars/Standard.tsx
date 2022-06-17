import { Snackbar, SnackbarOrigin } from '@mui/material'
import React from 'react'

export interface State extends SnackbarOrigin {
    open: boolean
}

type props = {
    snackBar: boolean
    setSnackBar: React.Dispatch<React.SetStateAction<boolean>>
}

const SnackBarStandard: React.FC<props> = ({ snackBar, setSnackBar }) => {
    const vertical = 'top'
    const horizontal = 'center'

    function handleClose() {
        setSnackBar(false)
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={snackBar}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
        />
    )
}
export default SnackBarStandard
