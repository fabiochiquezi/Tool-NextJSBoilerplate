import { signIn, signUp } from 'services'
import { onSubmitFnT } from './types'
import Router from 'next/router'

const onSubmitFn: onSubmitFnT = (setSnackBar, setLoading) => async dataForm => {
    try {
        setLoading(true)

        const newUser = await signUp(dataForm)
        if (!newUser.ok) throw new Error(newUser.message)

        const auth = await signIn(dataForm)
        if (!auth.ok) throw new Error(auth.message)

        Router.push('/simple-todo/list')
    } catch (e: any) {
        setSnackBar({ open: true, message: e.message, severity: 'error' })
        setLoading(false)
    }
}

export { onSubmitFn }
