import { SignIn } from 'app'
import { useState } from 'react'
import type { NextPage } from 'next'
import { HeadHTML } from 'src/components'
import { onSubmitFn } from './onSubmitFn'
import { SubmitButton, useComponents } from 'components'

const AuthSignIn: NextPage = () => {
    const { snackBar } = useComponents()
    const [loading, setLoading] = useState(false)
    const onSubmit = onSubmitFn(snackBar.setSnackBar, setLoading)

    const SubmitBtn = () => (
        <SubmitButton
            btnText="Sign In"
            loading={loading}
            className="mt-4 mb-8"
        />
    )

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <main>
                <SignIn onSubmit={onSubmit} SubmitButton={SubmitBtn} />
            </main>
        </div>
    )
}

export default AuthSignIn
