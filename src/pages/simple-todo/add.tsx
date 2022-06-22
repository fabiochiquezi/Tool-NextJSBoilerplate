import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import SimpleTodoAdd from '../../../app/SimpeToDo/add'
import StandarStructure from '../../../components/Structure/Standard'
import ButtonSignOut from '../../../app/Auth/SignOut'
import StandardTitle from '../../../components/Titles/Standard'
import StandardMenu from '../../../components/Structure/Menus/Standard'

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

            <StandarStructure ButtonSignOut={ButtonSignOut}>
                <StandardTitle>Add a ToDo document</StandardTitle>
                <StandardMenu />
                <SimpleTodoAdd />
            </StandarStructure>
        </div>
    )
}

export default SimpleToDoAddPage
