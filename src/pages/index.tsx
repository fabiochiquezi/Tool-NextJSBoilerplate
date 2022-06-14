import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import SimpleTodoAdd from '../SimpeToDo/add'


const Home: NextPage = () => {
    const title = 'Boilerplate | Home'
    const description = 'My boilerplate description'

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="ico/favicon.ico" />
            </Head>

            <main>
                <p className='font-serif text-6xl'>Teste</p>
                <SimpleTodoAdd />
            </main>
        </div>
    )
}

export default Home
