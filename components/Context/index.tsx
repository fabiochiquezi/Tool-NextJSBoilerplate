import React, { createContext, ReactNode, useContext, useState } from 'react'
import SnackBarStandard from './SnackBars/Standard'

type types = {
    snackBar: {
        snackBar: boolean
        setSnackBar: React.Dispatch<React.SetStateAction<boolean>>
    }
}
const defaultData: types = {
    snackBar: {
        snackBar: false,
        setSnackBar: () => null
    }
}
const context = createContext<types>(defaultData)
export const useComponents = () => useContext(context)

type Props = { children: ReactNode }
export function ComponentsProvider({ children }: Props) {
    const [snackBar, setSnackBar] = useState(false)

    const value = {
        snackBar: { snackBar, setSnackBar }
    }

    return (
        <>
            <context.Provider value={value}>
                <SnackBarStandard
                    snackBar={snackBar}
                    setSnackBar={setSnackBar}
                />
                {children}
            </context.Provider>
        </>
    )
}
