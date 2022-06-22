import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import { SignIn } from '../../../app/Auth/SignIn'
import AvatarDefault from '../../../components/Avatar/Default'

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
                <SignIn Avatar={AvatarDefault} />
            </main>
        </div>
    )
}

export default Home
