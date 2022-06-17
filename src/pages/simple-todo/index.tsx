import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import SimpleTodoList from '../../app/SimpeToDo/list'
import StandarStructure from '../../components/Structure/Standard'

const SimpleToDoAddPage: NextPage = () => {
    const title = 'Boilerplate | SimpleToDo List'
    const description = 'Description'

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="ico/favicon.ico" />
            </Head>

            <StandarStructure>
                <SimpleTodoList />
            </StandarStructure>
        </div>
    )
}

export default SimpleToDoAddPage