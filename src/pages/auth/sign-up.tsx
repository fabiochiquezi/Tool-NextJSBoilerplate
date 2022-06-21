import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import SignUp from '../../../app/Auth/SignUp'

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
                <SignUp />
            </main>
        </div>
    )
}

export default Home
