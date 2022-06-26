import { Dispatch, SetStateAction } from 'react'
import { AlertColor } from '@mui/material'
import { snackBarT } from '../../config'

export type SnackBarT = {
    open: boolean
    message?: string
    severity: AlertColor | undefined
    autoHide?: number
    setSnackBar: Dispatch<SetStateAction<snackBarT>>
}
