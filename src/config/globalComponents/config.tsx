import { AlertColor } from '@mui/material'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

// ---------------------------------------------------------------- Component's status

export type snackBarT = {
    open: boolean
    message: string
    severity: AlertColor | undefined
}

// ---------------------------------------------------------------- Context types and default values
type types = {
    snackBar: {
        snackBar: snackBarT
        setSnackBar: Dispatch<SetStateAction<snackBarT>>
    }
}

const defaultData: types = {
    snackBar: {
        snackBar: {
            open: false,
            message: '',
            severity: 'error'
        },
        setSnackBar: () => null
    }
}

// ---------------------------------------------------------------- Hooks
export const context = createContext<types>(defaultData)
export const useComponents = () => useContext(context)
