import 'config/globalStyle.css'
import { ReactQuery } from 'config'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { authState } from 'services'
import type { AppProps } from 'next/app'
import { authMiddlewre } from 'src/functions'
import { ComponentsProvider } from 'components'

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
