import React from 'react'
import axios from 'axios'
import { HeadHTML } from './Head'
import { HomeT } from './index.types'
import { resErrorStd } from 'helpers'
import type { NextPage, GetServerSideProps } from 'next'
import { Li, Structure, Error, Title } from 'components'
import { ButtonSignOut, SimpleTodoList, errorMessages } from 'app'

const Page: NextPage<HomeT> = ({ data }) => {
    const List = <SimpleTodoList list={data.data} Li={Li} />
    const ErrorJX = <Error message={data.message} />
    const View = () => (data.ok ? List : ErrorJX)

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>All Simple ToDo</Title>
                <View />
            </Structure>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const get = await axios.get('http://localhost:5000/api/simple-todo')
    const isRequestOk = get.status === 200
    if (isRequestOk) return { props: { data: get.data } }

    const errorRes = resErrorStd(errorMessages.getDefault, get.status)
    return { props: { data: errorRes } }
}

export default Page
