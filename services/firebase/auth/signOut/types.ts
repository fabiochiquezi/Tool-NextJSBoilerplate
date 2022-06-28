import { resFirebase, resFirebaseFnT } from '../../../helpers/res/types'
import { Auth } from 'firebase/auth'

type firebaseSignOut = (auth: Auth) => Promise<void>

export type signOutT = (
    res: resFirebaseFnT,
    errMsg: (msg: string) => string,
    successMessage: Record<string, string>,
    auth: Auth,
    signOut: firebaseSignOut
) => () => Promise<resFirebase>
