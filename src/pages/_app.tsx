import React from 'react'
import '../globalStyle.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { AppProps } from 'next/app'
import { ComponentsProvider } from '../components/Context'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ComponentsProvider>
                <Component {...pageProps} />
            </ComponentsProvider>
        </>
    )
}

export default MyApp
