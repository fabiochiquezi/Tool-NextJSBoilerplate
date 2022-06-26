import React from 'react'
import '../config/globalStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { ReactQuery } from '../config/ReactQuery'
import { RouteAuth, routes } from '../config/routes'
import { authState } from 'firebase/auth/authState'
import { ComponentsProvider } from 'components'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    authState((user: User | null) => {
        if (user) {
            const uid = user.uid
            console.log(user, 'user')
            return
        }

        const currentPath = router.pathname
        const routesArr = Object.values(routes)
        const isPrivate = routesArr.some(item => {
            const isCurrentRoute = currentPath === item.path
            const isPrivateRoute = item.auth === RouteAuth.private
            const verify = isCurrentRoute && isPrivateRoute
            if (verify) return true
            return false
        })

        if (isPrivate) router.push('/')
    })

    return (
        <>
            <ReactQuery>
                <ComponentsProvider>
                    <Component {...pageProps} />
                </ComponentsProvider>
            </ReactQuery>
        </>
    )
}

export default MyApp
