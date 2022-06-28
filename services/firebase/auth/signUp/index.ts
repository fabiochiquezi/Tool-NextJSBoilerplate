import { createUserWithEmailAndPassword as fireSignUp } from 'firebase/auth'
import { successMessage } from '../successMessages'
import { resp } from '../../../helpers/res'
import { getError } from '../errMessages'
import { auth } from '../../config'
import { signUpT } from './types'

const signUpStandard: signUpT = (res, errMsg, signUp) => async data => {
    try {
        const { email, password } = data
        const newUser = await signUp(auth, email, password)
        return res(true, 201, successMessage.signUp, { newUser })
    } catch (e: any) {
        const error = errMsg(e.message)
        return res(false, 400, error, {})
    }
}

export const signUp = signUpStandard(resp, getError, fireSignUp)
