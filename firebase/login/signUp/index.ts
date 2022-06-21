import { resFirebase } from '../../../helpers/response/resFirebase/types'
import { resFirebaseFn } from '../../../helpers/response/resFirebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'

type fn = (data: { email: string; password: string }) => Promise<resFirebase>

const getError = (error: string): string => {
    switch (error) {
        case 'Firebase: Error (auth/email-already-in-use).':
            return 'E-email already in use'
        default:
            return 'Problem happen trying to sign up, sorry but please try again or contact our staff'
    }
}

export const signUp: fn = async data => {
    const { email, password } = data
    try {
        const newUser = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        return resFirebaseFn(true, 201, 'New user added', { newUser })
    } catch (e: any) {
        const error = getError(e.message)
        return resFirebaseFn(false, 400, error, {})
    }
}
