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

export const getUser = getUserStandard(auth)
