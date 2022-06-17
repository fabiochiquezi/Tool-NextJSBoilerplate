import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import SimpleTodoAdd from '../../app/SimpeToDo/add'
import StandarStructure from '../../components/Structure/Standard'

const SimpleToDoAddPage: NextPage = () => {
    const title = 'Boilerplate | Home'
    const description = 'My boilerplate description'

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="ico/favicon.ico" />
            </Head>

            <StandarStructure>
                <SimpleTodoAdd />
            </StandarStructure>
        </div>
    )
}

export default SimpleToDoAddPage
