import React from 'react'
import Head from 'next/head'
import { resErrorStd } from 'helpers'
import { HomeT } from '../index.types'
import { Title, Structure, Menu, Li } from 'components'
import type { GetServerSideProps, NextPage } from 'next'
import { ButtonSignOut, SimpleTodoList, errorMessages } from 'app'

const Page: NextPage<HomeT> = ({ data }) => {
    const { ok, message } = data

    const Error = () => (
        <div className="flex justify-center mt-24 text-center">
            <p className="text-red-600">{message}</p>
        </div>
    )

    return (
        <div>
            <Head>
                <title>Boilerplate | SimpleToDo List</title>
                <meta name="description" content="Description" />
                <link rel="icon" href="ico/favicon.ico" />
            </Head>

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>My ToDo List</Title>
                <Menu />
                {ok ? <SimpleTodoList list={data.data} Li={Li} /> : <Error />}
            </Structure>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const get = await fetch('http://localhost:5000/api/simple-todo')

    if (get.status === 200) {
        const data = await get.json()
        const props = { data }
        return { props }
    }

    const errorRes = resErrorStd(errorMessages.getDefault, get.status)
    const props = { data: errorRes }
    return { props }
}

export default Page
