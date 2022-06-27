import Router from 'next/router'
import { signIn } from 'services'
import { onSubmitFnT } from './types'

const onSubmitFn: onSubmitFnT = (setSnackBar, setLoading) => async dataForm => {
    setLoading(true)
    const { message, ok } = await signIn(dataForm)

    if (ok) {
        setSnackBar({ open: true, message, severity: 'success' })
        Router.push('/simple-todo/list')
        return
    }

    setSnackBar({ open: true, message, severity: 'error' })
    setLoading(false)
}

export { onSubmitFn }
