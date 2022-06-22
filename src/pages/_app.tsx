import React from 'react'
import '../config/globalStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import { ReactQuery } from '../config/ReactQuery'
import { ComponentsProvider } from '../../components/Context'
import { authState } from '../../firebase/auth/authState'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { RouteAuth, routes } from '../config/routes'

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
