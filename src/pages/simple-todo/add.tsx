import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import { SimpleTodoAdd } from '../../../app/SimpeToDo/add'
import { Structure } from '../../../components/Structure/Standard'
import { ButtonSignOut } from '../../../app/Auth/SignOut'
import { Title } from '../../../components/Titles/Default'
import { Menu } from '../../../components/Structure/Menus/Default'

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

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>Add a ToDo document</Title>
                <Menu />
                <SimpleTodoAdd />
            </Structure>
        </div>
    )
}

export default SimpleToDoAddPage
