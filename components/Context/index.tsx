import SnackBarStandard from './SnackBars/Standard'
import React, { useState, ReactNode } from 'react'
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
                <SnackBarStandard
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
