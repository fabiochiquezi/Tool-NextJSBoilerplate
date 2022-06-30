import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { authState } from 'services'
import 'general/config/globalStyle.css'
import type { AppProps } from 'next/app'
import { authMiddlewre } from 'src/config'
import { ReactQuery } from 'general/config'
import { ComponentsProvider } from 'elements/components'

function MyApp({ Component, pageProps }: AppProps) {
    authState(authMiddlewre)

    return (
        <ReactQuery>
            <ComponentsProvider>
                <Component {...pageProps} />
            </ComponentsProvider>
        </ReactQuery>
    )
}

export default MyApp
