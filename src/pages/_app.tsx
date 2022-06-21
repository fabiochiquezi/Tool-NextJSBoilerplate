import React from 'react'
import '../config/globalStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import { ReactQuery } from '../config/ReactQuery'
import { ComponentsProvider } from '../../components/Context'

function MyApp({ Component, pageProps }: AppProps) {
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
