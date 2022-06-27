import React from 'react'
import { SignUp } from 'app'
import { HeadHTML } from '../Head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <main>
                <SignUp />
            </main>
        </div>
    )
}

export default Home
