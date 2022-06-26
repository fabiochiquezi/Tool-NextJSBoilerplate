import React, { useState, ReactNode } from 'react'
import { SnackBar } from './SnackBars/Default'
import { snackBarT, context } from './config'

const ComponentsProvider = ({ children }: { children: ReactNode }) => {
    const [snackBar, setSnackBar] = useState<snackBarT>({
        open: false,
        message: '',
        severity: 'error'
    })

    const value = {
        snackBar: { snackBar, setSnackBar }
    }

    return (
        <>
            <context.Provider value={value}>
                <SnackBar
                    open={snackBar.open}
                    message={snackBar.message}
                    severity={snackBar.severity}
                    setSnackBar={setSnackBar}
                />
                {children}
            </context.Provider>
        </>
    )
}

export { ComponentsProvider }
