import React from 'react'
import Head from 'next/head'
import SignIn from '../app/SignIn'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    const title = 'Boilerplate | SignIn'
    const description = 'My SignIn'

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="ico/favicon.ico" />
            </Head>

            <main>
                <SignIn />
            </main>
        </div>
    )
}

export default Home
