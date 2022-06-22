import React from 'react'
import Head from 'next/head'
import { resErrorStd } from '../../../helpers'
import ButtonSignOut from '../../../app/Auth/SignOut'
import SimpleTodoList from '../../../app/SimpeToDo/list'
import PrivateRoute from '../../../app/Auth/PrivateRoute'
import StandardTitle from '../../../components/Titles/Standard'
import { errorMessages } from '../../../app/Shared/Messages/error'
import StandarStructure from '../../../components/Structure/Standard'
import StandardMenu from '../../../components/Structure/Menus/Standard'
import type {
    NextPage,
    GetServerSideProps,
    InferGetServerSidePropsType as getType
} from 'next'

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

            <StandarStructure ButtonSignOut={ButtonSignOut}>
                <StandardTitle>My ToDo List</StandardTitle>
                <StandardMenu />
                {ok ? <SimpleTodoList list={data.data} /> : <Error />}
            </StandarStructure>
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
