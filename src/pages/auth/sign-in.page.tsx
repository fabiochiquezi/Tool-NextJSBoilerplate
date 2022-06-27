import React from 'react'
import { SignIn } from 'app'
import { signIn } from 'services'
import { HeadHTML } from '../Head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SubmitButton, useComponents } from 'components'

const Home: NextPage = () => {
    const [loading, setLoading] = React.useState(false)
    const { snackBar } = useComponents()
    const router = useRouter()

    const SubmitBtn = () => (
        <SubmitButton
            btnText="Sign In"
            loading={loading}
            className="mt-4 mb-8"
        />
    )

    const onSubmit = async (dataForm: any) => {
        setLoading(true)
        const { message, ok } = await signIn(dataForm)

        if (ok) {
            snackBar.setSnackBar({
                open: true,
                message,
                severity: 'success'
            })
            router.push('/simple-todo/list')
            return
        }

        snackBar.setSnackBar({
            open: true,
            message,
            severity: 'error'
        })

        setLoading(false)
    }

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <main>
                <SignIn
                    loading={loading}
                    onSubmit={onSubmit}
                    SubmitButton={SubmitBtn}
                />
            </main>
        </div>
    )
}

export default Home
