import { Auth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config'

const getUserStandard = (auth: Auth) => async () =>
    await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user => {
            if (user) {
                resolve(user)
                return
            }
            reject(new Error('invalid'))
        })
    })

const authStateStandard = (auth: Auth) => (fn: any) =>
    onAuthStateChanged(auth, fn)

export const authState = authStateStandard(auth)
export const getUser = getUserStandard(auth)
