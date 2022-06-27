import React from 'react'
import { HeadHTML } from '../Head'
import type { NextPage } from 'next'
import { SimpleTodoAdd, ButtonSignOut } from 'app'
import { Structure, Title, Menu } from 'components'

const SimpleToDoAddPage: NextPage = () => {
    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>Add a ToDo document</Title>
                <Menu />
                <SimpleTodoAdd />
            </Structure>
        </div>
    )
}

export default SimpleToDoAddPage
