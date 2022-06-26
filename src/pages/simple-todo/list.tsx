import React from 'react'
import Head from 'next/head'
import { resErrorStd } from '../../../helpers'
import { ButtonSignOut } from '../../../app/Auth/SignOut'
import { SimpleTodoList } from '../../../app/SimpeToDo/list'
import { Title } from '../../../components/Titles/Default'
import { errorMessages } from '../../../app/Shared/Messages/error'
import { Structure } from '../../../components/Structure/Standard'
import { Menu } from '../../../components/Structure/Menus/Default'
import type {
    NextPage,
    GetServerSideProps,
    InferGetServerSidePropsType as getType
} from 'next'
import { Li } from '../../../components/Lists/Default'

const Page: NextPage = ({ data }: getType<typeof getServerSideProps>) => {
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
