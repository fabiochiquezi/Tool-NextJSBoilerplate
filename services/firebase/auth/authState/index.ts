import { Auth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config'

const authStateStandard = (auth: Auth) => (fn: any) =>
    onAuthStateChanged(auth, fn)

export const authState = authStateStandard(auth)
