import React, { useState } from 'react'
import { SimpleTodoAdd } from 'app'
import type { NextPage } from 'next'
import { Structure, Title, Menu, SubmitButton } from 'components'
import { ButtonSignOut, HeadHTML } from 'src/components'

const SimpleToDoAddPage: NextPage = () => {
    const [loading, setLoading] = useState(false)

    const SubmitBtn = () => (
        <SubmitButton
            btnText="Sign In"
            loading={loading}
            className="mt-4 mb-8"
        />
    )

    return (
        <div>
            <HeadHTML title="My title" description="My description" />

            <Structure ButtonSignOut={ButtonSignOut}>
                <Title>Add a ToDo document</Title>
                <Menu />
                <SimpleTodoAdd SubmitButton={SubmitButton} />
            </Structure>
        </div>
    )
}

export default SimpleToDoAddPage
